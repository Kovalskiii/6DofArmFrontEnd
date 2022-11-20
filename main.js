const dataTerminalContainer = document.querySelector('.data-terminal-container');

document.querySelector('#connect-btn').addEventListener('click', () => updateDataTerminal());
//document.querySelector('#disconnect-btn').addEventListener('click', () => clearDataTerminal());
document.querySelector('#clear-btn').addEventListener('click', () => clearDataTerminal());

export const updateDataTerminal = (itemData) => {
  dataTerminalContainer.innerHTML += `
        <div class="data-terminal-item">
            <h5>${itemData}</h5>
        </div>`

  let scroll_to_bottom = dataTerminalContainer.lastChild;
  scroll_to_bottom.scrollIntoView(false);
}

const clearDataTerminal = () => {
  dataTerminalContainer.innerHTML = '';
}

// const dataTerminalItem = (itemData) => {
//   dataTerminalContainer.innerHTML += `
//         <div class="data-terminal-item">
//             <h5>${itemData}</h5>
//         </div>`
//
//   let scroll_to_bottom = dataTerminalContainer.lastChild;
//   scroll_to_bottom.scrollIntoView(false);
// }
