import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {
    @Test
    public void testCalculateTotalDistance() {
        String input = "3   4\n" +
                       "4   3\n" +
                       "2   5\n" +
                       "1   3\n" +
                       "3   9\n" +
                       "3   3";

        Calculator calculator = new Calculator(input);
        assertEquals(11, calculator.calculateTotalDistance());
    }

    @Test
    public void testCalculateTotalDistanceWithSinglePair() {
        Calculator calculator = new Calculator("1   6");
        assertEquals(5, calculator.calculateTotalDistance());
    }

    @Test
    public void testCalculateTotalDistanceWithIdenticalNumbers() {
        Calculator calculator = new Calculator("5   5");
        assertEquals(0, calculator.calculateTotalDistance());
    }

    @Test
    public void testCalculateSimilarity() throws Exception {
        String input = "3   4\n" +
                       "4   3\n" +
                       "2   5\n" +
                       "1   3\n" +
                       "3   9\n" +
                       "3   3";

        Calculator calculator = new Calculator(input);

        assertEquals(31, calculator.calculateSimilarity());
    }
}
