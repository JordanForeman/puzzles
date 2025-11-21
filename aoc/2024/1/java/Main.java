import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.err.println("Error: No input file specified");
            System.err.println("Usage: java Main <input-file>");
            System.exit(1);
        }

        String filename = args[0];
        
        try {
            String content = Files.readString(Paths.get(filename));
            Calculator calculator = new Calculator(content);
            System.out.println(String.format("Distance: %s", calculator.calculateTotalDistance()));
            System.out.println(String.format("Similarity: %s", calculator.calculateSimilarity()));
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
            System.exit(1);
        } catch (Exception e) {
            System.err.println("Error processing input: " + e.getMessage());
            System.exit(1);
        }
    }
}
