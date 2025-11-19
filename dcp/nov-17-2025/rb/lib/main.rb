class MajorityFinder
  def initialize(arr)
    @arr = arr
  end

  def find
    counts = {}
    majority = nil
    midpoint = (@arr.size / 2).floor

    @arr.each do |element|
      counts[element] ||= 0
      counts[element] += 1

      return element if counts[element] > midpoint

      majority = element if majority.nil? # default case
      majority = element if counts[element] > counts[majority]
    end

    return majority
  end
end
