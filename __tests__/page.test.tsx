import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'
 
describe('Page', () => {
  beforeEach(() => {
    render(<Home />)
  })
  it("home-page is in the document", () => {
    const homePage = screen.getByTestId("home-page")
    expect(homePage).toBeInTheDocument()
  })
  it("React Diary title is in the document", () => {
    const headerText = screen.getByText("React Diary")
    expect(headerText).toBeInTheDocument()
  })
  it("select box is in the document", () => {
    const selectBox = screen.getByTestId("select-box")
    expect(selectBox).toBeInTheDocument()
  })
  it("<MonthCalendar /> is in the document with expected events and month", () => {
    const monthCalendar = screen.getByTestId("month-calendar")
    expect(monthCalendar).toBeInTheDocument()
    expect(monthCalendar.textContent).toMatch("October 1986")
    expect(monthCalendar.textContent).toMatch("CLM")
  })
/*   it("<DatePicker /> is in the document with expected events and month", () => {
    const datePicker = screen.getByTestId("date-picker")
    expect(datePicker).toBeInTheDocument()
    expect(datePicker.textContent).toMatch("October 1986")
    expect(datePicker.textContent).toMatch("CLM")
  }) */
  it("React Diary GitHub link is in the document", () => {
    const githubLink = screen.getByTestId("github-link")
    expect(githubLink.textContent).toMatch("View GitHub")
  })
  it("React Diary npm link is in the document", () => {
    const npmLink = screen.getByTestId("npm-link")
    expect(npmLink.textContent).toMatch("View NPM")
  })
  it("matches snapshot", () => {
    const homePage = screen.getByTestId("home-page")
    expect(homePage).toMatchSnapshot()
  })
})