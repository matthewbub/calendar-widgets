import { Locale } from './types';

export const locale: Locale = {
  locale: 'বাংলা (ভারত)',
  daysOfWeek: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'],
  daysOfWeekFull: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'],
  monthsFull: ['জানুয়ারি', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
  monthsShort: ['জানুয়ারি', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
  today: 'আজ',
  clear: 'পরিষ্কার',
  close: 'বন্ধ',
  firstDay: 0,
  labelMonthNext: 'পরের মাস',
  labelMonthPrev: 'পূর্ববর্তী মাস',
  labelMonthSelect: 'একটি মাস নির্বাচন করুন',
  labelYearSelect: 'একটি বছর নির্বাচন করুন',
  errorMonth: 'ভুল মাস। মাস ১ থেকে ১২ এর মধ্যে হতে হবে।',
  errorYear: 'ভুল বছর। বছর ১৯০০ এবং ২১০০ এর মধ্যে হতে হবে।',
  errorDay: 'ভুল দিন। দিন ১ থেকে ৩১ এর মধ্যে হতে হবে।',
  errorLocale: 'ভুল লোকেল। লোকেল একটি স্ট্রিং হতে হবে। উদাহরণস্বরূপ: "bn-IN"।',
  errorOptions: 'ভুল বিকল্পসমূহ। বিকল্পসমূহ অবশ্যই একটি অবজেক্ট হতে হবে। আরো তথ্যের জন্য https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString দেখুন।'
};
