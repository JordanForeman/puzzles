## Problem

See https://adventofcode.com/2025/day/1

## Solution

This one gave me a heckuva time. I fell into the same trap I usually do with these sorts of problems where I attempt to shove an entire algorithm into a single method (note how the test file doesn't actually test the `Dial` class. We'll get to that). This trap is particularly easy to fall into when writing in JavaScript, where classes (while supported) have not traditionally been considered "idiomatic". Attempting to solve these sorts of algorithms in a purely functional matter often proves difficult.

Rather than continue to tweak the `if`/`else` blocks of the `solve` method, I finally attempted to create a `Dial` class that I could test on its own (**issue:** I didn't actually test the dial. In a real world scenario, this should definitely have been test-driven). By shifting my mental model to something more concrete I was able to more effectively visualize, debug, and solve this problem in a manner of minutes.

## Learnings

1. Step away rather than continue attacking the problems

I got rate-limited on my responses, because even though all of my tests passed the actual second-problem solution didn't account for edge cases in the actual `input.txt`. Eventually I had to step away and go to bed. It wasn't five minutes later while brushing my teeth that the idea of creating a `Dial` class to model the behavior would have made this much easier to reason about and solve  (**spoiler alert:** it did).

2. Don't be afraid to use state to model complex problems

What constitutes "complex" is so often up for interpretation. That said, these Advent of Code problems are great examples where a mental model is clearly provided in the problem (in this case, that of a padlock `Dial`). Use these mental models sooner, rather than later.

