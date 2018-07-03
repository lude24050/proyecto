require 'test_helper'

class Juego1ControllerTest < ActionDispatch::IntegrationTest
  test "should get game1" do
    get juego1_game1_url
    assert_response :success
  end

end
