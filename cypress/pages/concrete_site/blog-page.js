const SEARCH_FIELD = 'input[placeholder*="faça sua busca"]'
const FIRST_POST_LINK = '[href="/2017/10/10/prodcast-scrum/"]'


class BlogPage {

    static getUrl() {
        return cy.url()
    }
  
  static typeInSearchField(text) {
      cy.get(SEARCH_FIELD).type(text+'{enter}')
  }

  static getFirstLinkText() {
      return cy.get(FIRST_POST_LINK)
  }
}

export default BlogPage;