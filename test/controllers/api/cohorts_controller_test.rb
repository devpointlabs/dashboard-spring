require 'test_helper'

class Api::CohortsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_cohorts_index_url
    assert_response :success
  end

  test "should get show" do
    get api_cohorts_show_url
    assert_response :success
  end

  test "should get create" do
    get api_cohorts_create_url
    assert_response :success
  end

  test "should get update" do
    get api_cohorts_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_cohorts_destroy_url
    assert_response :success
  end

end
