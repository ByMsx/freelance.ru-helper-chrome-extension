/**
 * @param {string} className
 */
function hideByClass(className) {
  $(`.${className}`).hide();
}

/**
 * @param {string} root
 * @param {string} className
 */
function hideOthersByClass(root, className) {
  $(`${root} > *:not(.${className})`).hide();
}

const filters = {
  'hideBiz': function() {
    hideByClass('not_public');
  },
  'hideSeen': function() {
    hideByClass('seen');
  },
  'showOnlySafeDeal': function() {
    hideOthersByClass('.projects', 'safe_deal');
  },
};

window.onload = function() {
  getMultipleFilterValues(Object.values(keyNames.filterOpts), (err, toggle) => {
    const flags = keyNames.filterOpts;
    if (toggle[flags.hideBiz]) {
      filters.hideBiz();
    }

    if (toggle[flags.hideSeen]) {
      filters.hideSeen();
    }

    if (toggle[flags.showOnlySafeDeal]) {
      filters.showOnlySafeDeal();
    }
  });
};
