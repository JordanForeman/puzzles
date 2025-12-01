require "minitest/autorun"
require "lib/main"

describe :solve do
  it "solves the puzzle" do
    input = "test input"
    expected = nil

    assert_equal solve(input), expected
  end
end

