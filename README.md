# 🧩 Puzzles

This repository contains my attempts at various programming and algorithm puzzles that I've come across. It includes some standardized tooling to make getting started quick and easy.

<details>
  <summary>Why is it called puzzles?</summary>

  THAT'S THE PUZZLE!
</details>

## 🗂️ Navigation

This repository is organized first by puzzle source (eg. [Daily Coding Problem](https://www.dailycodingproblem.com/), [Advent of Code](https://adventofcode.com/), etc.) as an acronym (`dcp`, `aoc`, etc. respectively). From there puzzles are organized by date and then language suffix (`js`, `go`, etc.)

## 🛠️ Tooling

### Testing

All puzzles have unit tests written in their respective languages, and should be able to validated in each language's idioms. When in doubt, consider each solution's `README.md`, as it should have more information.

### Scaffolding

Each supported language has a template available in the `templates` directory. Use `bin/generate` to generate a language scaffold. eg:

```bash
bin/generate # You will be prompted for a language
```

or:

```bash
bin/generate <language_suffix> # Will generate a scaffold in the language specified. Don't include <> please
```

Answer all questions truthfully please.

## 🤖 Regarding LLMs

The use of LLMs is permitted ONLY for scaffolding / language support and generating test cases.

NEVER use LLM assistance when coming up with solutions; that would defeat the purpose of the entire exercise.

