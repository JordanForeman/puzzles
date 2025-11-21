import java.util.Arrays;
import java.util.HashMap;

public class Calculator {
    private int[] leftList;
    private int[] rightList;
    private HashMap<Integer, Integer> rightCounts;

    public Calculator(String input) {
      rightCounts = new HashMap<>();
      preprocess(input);
    }

    public int calculateTotalDistance() {
        int totalDistance = 0;

        for (int i = 0; i < leftList.length; i++) {
          int leftVal = leftList[i];
          int rightVal = rightList[i];

          totalDistance += Math.abs(leftVal - rightVal);
        }

        return totalDistance;
    }

    public int calculateSimilarity() {
      int similarity = 0;

      for (int i = 0; i < leftList.length; i++) {
        int leftVal = leftList[i];
        if (rightCounts.containsKey(leftVal)) {
          similarity += leftVal * rightCounts.get(leftVal);
        }
      }

      return similarity;
    }

    private void preprocess(String input) {
        String[] lines = input.trim().split("\n");
        this.leftList = new int[lines.length];
        this.rightList = new int[lines.length];

        for (int i = 0; i < lines.length; i++) {
            String[] parts = lines[i].trim().split("\\s+");
            this.leftList[i] = Integer.parseInt(parts[0]);

            int rightVal = Integer.parseInt(parts[1]);
            this.rightList[i] = rightVal;

            if (rightCounts.containsKey(rightVal)) {
              rightCounts.put(rightVal, rightCounts.get(rightVal) + 1);
            } else {
              rightCounts.put(rightVal, 1);
            }
        }

        Arrays.sort(this.leftList);
        Arrays.sort(this.rightList);
    }
}
