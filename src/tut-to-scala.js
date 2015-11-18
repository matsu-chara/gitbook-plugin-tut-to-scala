"use strict";

module.exports = {
  hooks: {
    "page:before": (page) => {
      page.content = page.content.replace(/\`\`\`tut/g, "```scala");
      return page;
    }
  }
};
