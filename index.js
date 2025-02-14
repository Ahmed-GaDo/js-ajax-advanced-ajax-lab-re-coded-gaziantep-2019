function getRepositories () {
    const req = new XMLHttpRequest();
    req.addEventListener('load', showRepositories);
    req.open('GET', 'https://api.github.com/users/octocat/repos');
    req.send();
}

function showRepositories(event, data) {
    //we will use JSON.parse here to parse the response string into proper objects !
    const repos = JSON.parse(this.responseText);
    const src = document.getElementById('repository-template').innerHTML;
    const template = Handlebars.compile(src);
    const repoList = template(repos); }

document.addEventListener('DOMContentLoaded', function(event) {
    Handlebars.registerPartial(
      'authorPartial',
      document.getElementById('author-partial-template').innerHTML
    );
  });
  