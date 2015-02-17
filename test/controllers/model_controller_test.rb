require 'test_helper'

class ModelControllerTest < ActionController::TestCase
  test "should get Project" do
    get :Project
    assert_response :success
  end

  test "should get name:string" do
    get :name:string
    assert_response :success
  end

  test "should get description:text" do
    get :description:text
    assert_response :success
  end

end
