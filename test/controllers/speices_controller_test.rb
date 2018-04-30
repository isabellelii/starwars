require 'test_helper'

class SpeicesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get speices_index_url
    assert_response :success
  end

end
