require "minitest/autorun"
require "lib/main"

describe MajorityFinder, :find do
  describe "finds the majority element of the provided arr" do
    it "should return the correct element in an uneven array" do
      finder = MajorityFinder.new([1, 2, 1, 1, 3, 4, 0])
      result = finder.find

      assert_equal result, 1
    end

    it "should return the correct element in an even array" do
      finder = MajorityFinder.new([3, 4, 4, 5, 4, 3])

      assert_equal finder.find, 4
    end

    it "should return the correct element (ideally with an early return)" do
      finder = MajorityFinder.new([1, 2, 2, 2, 3])

      assert_equal finder.find, 2
    end
  end
end

