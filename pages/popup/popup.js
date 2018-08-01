function updateFilterCheckboxValue(checkbox, filterKey) {
  getFilterValue(filterKey, (err, data) => {
    checkbox.prop('checked', data);
  });
}

function bindFilterCheckboxClickEvent(checkbox, filterKey) {
  checkbox.bind('click', () => {
    toggleFilter(filterKey, checkbox.prop('checked'), reloadFreelanceTab);
  });
}

function initializeInterface() {
  const hideBizCheckbox = $('#hideBizCheckbox');
  const hideSeenCheckbox = $('#hideSeenCheckbox');
  const showOnlySafeDealCheckbox = $('#showOnlySafeDealCheckbox');

  updateFilterCheckboxValue(hideBizCheckbox, keyNames.filterOpts.hideBiz);
  updateFilterCheckboxValue(hideSeenCheckbox, keyNames.filterOpts.hideSeen);
  updateFilterCheckboxValue(showOnlySafeDealCheckbox, keyNames.filterOpts.showOnlySafeDeal);

  bindFilterCheckboxClickEvent(hideBizCheckbox, keyNames.filterOpts.hideBiz);
  bindFilterCheckboxClickEvent(hideSeenCheckbox, keyNames.filterOpts.hideSeen);
  bindFilterCheckboxClickEvent(showOnlySafeDealCheckbox, keyNames.filterOpts.showOnlySafeDeal);
}

$(document).ready(initializeInterface);
