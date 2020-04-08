require 'test_helper'

class VolcanosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @volcano = volcanos(:one)
  end

  test "should get index" do
    get volcanos_url, as: :json
    assert_response :success
  end

  test "should create volcano" do
    assert_difference('Volcano.count') do
      post volcanos_url, params: { volcano: { content: @volcano.content, elevation: @volcano.elevation, ideal_for: @volcano.ideal_for, image_url: @volcano.image_url, location: @volcano.location } }, as: :json
    end

    assert_response 201
  end

  test "should show volcano" do
    get volcano_url(@volcano), as: :json
    assert_response :success
  end

  test "should update volcano" do
    patch volcano_url(@volcano), params: { volcano: { content: @volcano.content, elevation: @volcano.elevation, ideal_for: @volcano.ideal_for, image_url: @volcano.image_url, location: @volcano.location } }, as: :json
    assert_response 200
  end

  test "should destroy volcano" do
    assert_difference('Volcano.count', -1) do
      delete volcano_url(@volcano), as: :json
    end

    assert_response 204
  end
end
