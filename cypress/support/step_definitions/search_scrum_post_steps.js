import HomePage from '../../pages/concrete_site/home-page'
import BlogPage from '../../pages/concrete_site/blog-page'
import { join } from 'path';


Given(`I open the home page`, () => {
    HomePage.visit()
  })
  
When(`I search by a post in blog with title {string}`, text => {
    HomePage.getTitle().then(titleText => {
        expect(titleText).to.contain('Concrete')
    })
    HomePage.pressMenuButton()
    HomePage.pressBlogMenuOption()
    BlogPage.getUrl().then(url => {
        expect(url).to.contain('/blog')
    })
    BlogPage.typeInSearchField(text)
})
  
Then(`I see the first post with title {string}`, text => {
    BlogPage.getFirstLinkText().then(firstLink => {
        expect(firstLink).to.contain(text)
    })
})
  