require "application_system_test_case"

class VerbosTest < ApplicationSystemTestCase
  setup do
    @verbo = verbos(:one)
  end

  test "visiting the index" do
    visit verbos_url
    assert_selector "h1", text: "Verbos"
  end

  test "creating a Verbo" do
    visit verbos_url
    click_on "New Verbo"

    fill_in "Palabra", with: @verbo.palabra
    fill_in "Significado", with: @verbo.significado
    click_on "Create Verbo"

    assert_text "Verbo was successfully created"
    click_on "Back"
  end

  test "updating a Verbo" do
    visit verbos_url
    click_on "Edit", match: :first

    fill_in "Palabra", with: @verbo.palabra
    fill_in "Significado", with: @verbo.significado
    click_on "Update Verbo"

    assert_text "Verbo was successfully updated"
    click_on "Back"
  end

  test "destroying a Verbo" do
    visit verbos_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Verbo was successfully destroyed"
  end
end
