# Advent of Code 2024 Day 1

A Java solution for Advent of Code 2024 Day 1 with JUnit 4 testing.

## Prerequisites

- Java Development Kit (JDK) 17 or higher
- Apache Maven 3.6 or higher

## Getting Started

This project uses Maven for dependency management and build automation. All dependencies (JUnit 4.13.2 and Hamcrest Core 1.3) are automatically downloaded by Maven.

### Run the Application

Execute the application with an input file:

```bash
mvn compile exec:java -Dexec.args="../input.txt"
```

Or with any other input file:

```bash
mvn compile exec:java -Dexec.args="path/to/your/input.txt"
```

The application will read the input file, calculate the total distance, and print the result to stdout.

### Run Tests

Execute the JUnit test suite:

```bash
mvn test
```

### Build Only

Compile the source files without running:

```bash
mvn compile
```

### Clean Build Artifacts

Remove compiled classes and build artifacts:

```bash
mvn clean
```

## Project Structure

```
.
├── Main.java          # Application entry point
├── Calculator.java    # Core calculation logic
├── CalculatorTest.java # JUnit 4 test suite
├── pom.xml            # Maven project configuration
├── bin/               # Legacy utility scripts (deprecated)
└── README.md          # This file
```

## Input File Format

The input file should contain pairs of numbers separated by whitespace, one pair per line:

```
3   4
4   3
2   5
1   3
3   9
3   3
```

## Development Workflow

1. Clone the repository
2. Run `mvn test` to compile and run tests
3. Make your changes
4. Run `mvn clean test` to validate
5. Run your solution with `mvn compile exec:java -Dexec.args="path/to/input.txt"`

## Maven Configuration

The `pom.xml` is configured to:
- Use Java 17 source and target compatibility
- Include JUnit 4.13.2 for testing
- Include Hamcrest Core 1.3 for assertions
- Compile Main.java and Calculator.java from the root directory
- Run tests using the Maven Surefire plugin
- Execute the application using the Exec Maven plugin

**Note:** Compiled `.class` files and Maven `target/` directory are not committed to the repository.
