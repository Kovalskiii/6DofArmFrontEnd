import './style.css'
import { connectSocket, disconnectSocket } from "./socketClient.js";

const dataTerminalContainer = document.querySelector('.data-terminal-container');
export const connectBtn = document.querySelector('#connect-btn');
export const disconnectBtn = document.querySelector('#disconnect-btn');

disconnectBtn.disabled = true;

connectBtn.addEventListener('click', () => connectSocket());
disconnectBtn.addEventListener('click', () => disconnectSocket());
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

