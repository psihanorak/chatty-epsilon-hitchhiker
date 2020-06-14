import data from '../helpers/data/userData';
import utils from '../helpers/utils';
import messageUsers from './messageUsers';

const clearHistory = () => {
  $('#warningModal').modal('toggle');
  data.setTrashBefore(Date.now());
  messageUsers.displayMessages();
};

const createWarning = () => {
  const domString = `
  <div class="modal fade" id="warningModal" tabindex="-1" role="dialog" aria-labelledby="warningLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="warningLabel">Clear History</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            All messages in your history will be deleted.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger"  id="confirmClear">Clear All</button>
          </div>
        </div>
      </div>
    </div>`;
  utils.printToDom('#modal', domString);
  $('#confirmClear').click(() => {
    clearHistory();
  });
};

const createClearButton = () => {
  createWarning();
  const domString = `
  <button type="button" class="btn btn-secondary" id="clearHistory" data-toggle="modal" data-target="#warningModal">Clear History</button>
  `;
  utils.printToDom('#history-controls', domString);
};

export default { createClearButton };
