module.exports = octokitEnterpriseCompatibility

function octokitEnterpriseCompatibility (octokit) {
  // see https://github.com/octokit/rest.js/blob/15.x/lib/routes.json#L3046-L3068
  octokit.registerEndpoints({
    issues: {
      addLabels: {
        method: 'POST',
        params: {
          labels: {
            required: true,
            type: 'string[]',
            mapTo: 'data'
          },
          number: {
            required: true,
            type: 'integer'
          },
          owner: {
            required: true,
            type: 'string'
          },
          repo: {
            required: true,
            type: 'string'
          }
        },
        url: '/repos/:owner/:repo/issues/:number/labels'
      }
    }
  })
}