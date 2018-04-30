require 'test_helper'

class SpaceshipsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get spaceships_index_url
    assert_response :success
  end

end
