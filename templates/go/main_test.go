package main

import "testing"

func TestSolve(t *testing.T) {
	input := "test input"
	var expected interface{} = nil

	result := solve(input)
	if result != expected {
		t.Errorf("solve() = %v, want %v", result, expected)
	}
}
