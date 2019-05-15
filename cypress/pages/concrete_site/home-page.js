const HAMBURGER_BUTTON = 'img[alt="Hamburger button"]'
const MENU_OPTION = 'span'
const BLOG_MENU_OPTION_TEXT = 'blog'


class HomePage {
  static visit() {
    cy.visit('/')
  }

  static getTitle() {
      return cy.title()
  }

  static pressMenuButton() {
      cy.get(HAMBURGER_BUTTON).click()
  }

  static pressBlogMenuOption() {
      cy.get(MENU_OPTION).contains(BLOG_MENU_OPTION_TEXT)
        .click()
  }
}

export default HomePage;