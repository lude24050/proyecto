require 'test_helper'

class VerbosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @verbo = verbos(:one)
  end

  test "should get index" do
    get verbos_url
    assert_response :success
  end

  test "should get new" do
    get new_verbo_url
    assert_response :success
  end

  test "should create verbo" do
    assert_difference('Verbo.count') do
      post verbos_url, params: { verbo: { palabra: @verbo.palabra, significado: @verbo.significado } }
    end

    assert_redirected_to verbo_url(Verbo.last)
  end

  test "should show verbo" do
    get verbo_url(@verbo)
    assert_response :success
  end

  test "should get edit" do
    get edit_verbo_url(@verbo)
    assert_response :success
  end

  test "should update verbo" do
    patch verbo_url(@verbo), params: { verbo: { palabra: @verbo.palabra, significado: @verbo.significado } }
    assert_redirected_to verbo_url(@verbo)
  end

  test "should destroy verbo" do
    assert_difference('Verbo.count', -1) do
      delete verbo_url(@verbo)
    end

    assert_redirected_to verbos_url
  end
end
