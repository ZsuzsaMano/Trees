import TreeCard from "../../src/components/TreeCard"

const tree={
"name": "Baobab",
"species_name": "Adansonia",
"image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg"
}

describe('TreeCard.cy.js', () => {
  it('written Show image on button on first load', () => {
     cy.mount(<TreeCard tree={tree}/>)
     cy.getBySel('toggle-button').should(
       "have.text",
       "Show image"
     );
  })

  it("image not visible on first load", () => {
    cy.mount(<TreeCard tree={tree} />);
    cy.getBySel("toggle-image").should("not.be.visible");;
  });

 it("written Hide image on button after click", () => {
   cy.mount(<TreeCard tree={tree} />);
   cy.getBySel('toggle-button')
     .click()
     .should("have.text", "Hide image");
   cy.getBySel('toggle-image').should("be.visible");
 });

 it("Image visible after clicking button", () => {
   cy.mount(<TreeCard tree={tree} />);
   cy.getBySel('toggle-button').click();  
   cy.getBySel('toggle-image').should("be.visible");
 });
})