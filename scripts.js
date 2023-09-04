// import data.js'
import { createOrderData } from "./data.js";
import { updateDragging } from "./data.js";

// import view.js
import { createOrderHtml } from "./view.js";
import { html } from "./view.js";
import { updateDraggingHtml } from "./view.js";
import { moveToColumn } from "./view.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
// drag element 
const handleDragOver = (event) => {} 
//   const handleDragStart = (event) => {
    
//   }
//   const handleDragEnd = (event) => {}
// click on the question mark/help button --- infor will display and close event
const handleHelpToggle = (event) => {
    if (!html.help.overlay.open) {
        html.help.overlay.showModal()
    } else {
        html.help.overlay.close()
    }
    html.help.cancel.addEventListener('click', () => {html.help.overlay.close()})
}
// add element
const handleAddToggle = (event) => {
    if (!html.add.overlay.open) {
        html.add.overlay.showModal()
    } else {
      html.add.overlay.close()
    }
  
    html.add.cancel.addEventListener('click', () => {html.add.overlay.close()})
    html.add.form.reset()
}
// const handleAddSubmit = (event) => {
//     event.preventDefault()

// }
const handleEditToggle = (event) => {}
// update element order
const handleEditSubmit = (event) => {}
// delete order
const handleDelete = (event) => {
    const activeElementId = document.querySelector('[data-edit-id]')
    const actualId = activeElementId.getAttribute('data-edit-id')
    const orderId = document.querySelector(`[data-id="${actualId}"]`)
    orderId.remove()
    html.edit.overlay.close()
}
// event listener allows function to proceed
html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}