# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A 6-letter Wordle clone built with Next.js and React 17, deployed at https://jackswordle.netlify.app/.

## Commands

All commands run from the `wordle/` directory:

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Start production:** `npm run start`

No test framework or linter is configured.

## Architecture

Next.js app using the Pages Router (no App Router). Styling uses Next.js `<style jsx>` (CSS-in-JS) throughout — no external CSS files.

### Key Components

- **`pages/index.js`** — Single page entry point, renders `<Wordle />`
- **`component/wordle.js`** — Main game controller. Manages guess state (a 6-char string, default `______`), cursor position (`guessPosition` 0–5), and key press handling via `useEffect` on `keyPressed` state changes
- **`component/guess.js`** — Displays the current guess as 6 readonly `<input>` elements; highlights active position with green background
- **`component/keyboard.js`** — On-screen QWERTY keyboard using `onMouseDown` handlers; includes delete (backspace) logic that clears current and previous position

### State Flow

Keyboard button press → `setKeyPressed(letter)` → `useEffect` in Wordle detects change → updates `guess` string at `guessPosition` → advances position. Delete works by decrementing position and clearing characters directly via `setGuess`.
