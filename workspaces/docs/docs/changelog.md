---
title: Changelog
slug: /changelog
---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## 0.0.11

## Removed
- `react` and `react-dom` from build to reduce build size and avoid conflicts with library users

## Added
- `react` and `react-dom` as peer dependencies 

## Changed
- Changed build output from `umd` to both `es` and `cjs` for React Component Development
- Changed production build to utilize `terser` to minify code

## 0.0.10

### Changed
- [Changed `getCalendarYear` to `listCalendarYear`](https://github.com/9mbs/calendar-widgets/issues/130)
- [Changed build output from `es` to `umd` for better support](https://github.com/9mbs/calendar-widgets/issues/120)
- [Changed ESLint Rules](https://github.com/9mbs/calendar-widgets/issues/97). Thanks, [@giri-madhan](https://github.com/giri-madhan)

### Added
- [Added new method `listLocalizedMonths`](https://github.com/9mbs/calendar-widgets/issues/121)
- [Added MIT License to NPM package](https://github.com/9mbs/calendar-widgets/issues/125). Thanks, [@bajibpathan](https://github.com/bajibpathan)!
- [Added React to Rollup configuration for module bundling](https://github.com/9mbs/calendar-widgets/issues/121)

## 0.0.8 & 0.0.9

### Added 

- [Added gu-IN to locale](https://github.com/9mbs/calendar-widgets/pull/94). Thanks, [@Ankan-cyber](https://github.com/Ankan-cyber)!
- [Added bn-IN to locale](https://github.com/9mbs/calendar-widgets/pull/95). Thanks, [@Ankan-cyber](https://github.com/Ankan-cyber)!
- [Added production configuration build, minified distributable code](https://github.com/9mbs/calendar-widgets/issues/102)

### Changed

- [Simplified the `getCalendarYear` Error handling and response object](https://github.com/9mbs/calendar-widgets/issues/81)
- [Strengthened ESLint Rules](https://github.com/9mbs/calendar-widgets/issues/57).
- [Ignore SRC in Build](https://github.com/9mbs/calendar-widgets/issues/80). Thanks, [@Ankan-cyber](https://github.com/Ankan-cyber)!
- [Modified License](https://github.com/9mbs/calendar-widgets/issues/104).

## 0.0.7

### Added 

- [Added support to various locales](https://github.com/9mbs/calendar-widgets/issues/59)
