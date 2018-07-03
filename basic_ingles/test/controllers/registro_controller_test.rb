require 'test_helper'

class RegistroControllerTest < ActionDispatch::IntegrationTest
  test "should get pagina1" do
    get registro_pagina1_url
    assert_response :success
  end

end
