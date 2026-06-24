# Reverse Polish Notation calculator
#
class ReversePolish
  def calculate(expression:)
    # puts "Calculating Reverse Polish value of #{expression}"
    # Iterate through the array backwards, reducing the contents into values (either raw numbers or sub-calculations)
    # Consider recursion as a means of narrowing
    operator = expression.pop
    operand_b = extract_operand(expression)
    operand_a = extract_operand(expression)
    # puts "Operand A: #{operand_a}"
    # puts "Operand B: #{operand_b}"
    #
    # puts "Computing: #{operand_a}#{operator}#{operand_b}"

    result = operand_a.send(operator, operand_b)
    # puts "Result: #{result}"
    result
  end

  private

  def extract_operand(expression)
    if expression.last.is_a? Numeric # Raw value
      expression.pop
    else # Sub-expression
      calculate(expression: expression)
    end
  end
end

calculator = ReversePolish.new
expression_a = [15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']
puts "Expression A: #{expression_a}"
result_a = calculator.calculate(expression: expression_a)
puts "Result A: #{result_a}"

puts

expression_b = [5, 3, '+']
puts "Expression B: #{expression_b}"
result_b = calculator.calculate(expression: expression_b)
puts "Result B: #{result_b}"
