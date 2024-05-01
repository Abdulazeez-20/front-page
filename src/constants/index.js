import {
  shield,
  profile,
  time,
  editRE,
  access,
  publishing,
  ontime,
} from "../assets";

export const Navlink = [
  {
    id: "hero",
    title: "الصفحة الرئيسية",
  },
  {
    id: "features",
    title: "المميزات",
  },
  {
    id: "about",
    title: "حول",
  },
];

export const Cards = [
  {
    title: "أمن للبيانات",
    image: shield,
  },
  {
    title: "يوفر الوقت",
    image: ontime,
  },
  {
    title: "ملف شخصي للباحث",
    image: profile,
  },
  {
    title: "امكانية نشر الابحاث",
    image: publishing,
  },
  {
    title: "امكانية تعديل الابحاث",
    image: editRE,
  },
  {
    title: "سهل الاستخدام",
    image: access,
  },
];
