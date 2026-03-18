import type { ClassItem, ScheduleRow, Instructor, Testimonial, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Hakkimizda", href: "#hakkimizda" },
  { label: "Dersler", href: "#dersler" },
  { label: "Takvim", href: "#takvim" },
  { label: "Iletisim", href: "#iletisim" },
];

export const CLASSES: ClassItem[] = [
  {
    id: 1,
    name: "Hatha Yoga",
    description:
      "Temel duruslar ve nefes teknikleriyle bedeninizi ve zihninizi dengelemenin en guzel yolu. Yeni baslayanlar icin ideal.",
    duration: "60 dk",
    level: "Temel",
  },
  {
    id: 2,
    name: "Vinyasa Flow",
    description:
      "Dinamik akis hareketleriyle nefes ve bedeni senkronize edin. Guc ve esneklik bir arada.",
    duration: "75 dk",
    level: "Orta",
  },
  {
    id: 3,
    name: "Yin Yoga",
    description:
      "Yavas tempolu, derin germe odakli pratik. Bagli dokulari rahatlatir, ic huzur saglar.",
    duration: "90 dk",
    level: "Restoratif",
  },
  {
    id: 4,
    name: "Meditasyon",
    description:
      "Rehberli meditasyon seanslari ile zihninizi sakinlestirin, farkindalik ve odaklanma gelistirin.",
    duration: "45 dk",
    level: "Herkes",
  },
];

export const SCHEDULE_DAYS = ["Pzt", "Sal", "Car", "Per", "Cum", "Cmt", "Paz"];

export const SCHEDULE_PERIODS = ["Sabah", "Ogle", "Aksam"];

export const SCHEDULE_DATA: ScheduleRow[] = [
  // Sabah
  [
    { className: "Hatha Yoga", time: "07:00" },
    null,
    { className: "Vinyasa Flow", time: "07:30" },
    null,
    { className: "Hatha Yoga", time: "07:00" },
    { className: "Meditasyon", time: "08:00" },
    null,
  ],
  // Ogle
  [
    null,
    { className: "Yin Yoga", time: "12:00" },
    null,
    { className: "Hatha Yoga", time: "12:00" },
    null,
    { className: "Vinyasa Flow", time: "11:00" },
    { className: "Yin Yoga", time: "11:00" },
  ],
  // Aksam
  [
    { className: "Meditasyon", time: "19:00" },
    { className: "Vinyasa Flow", time: "18:30" },
    { className: "Meditasyon", time: "19:00" },
    { className: "Yin Yoga", time: "18:00" },
    { className: "Vinyasa Flow", time: "18:30" },
    null,
    null,
  ],
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 1,
    name: "Elif Dogan",
    title: "Kurucu & Bas Egitmen",
    bio: "15 yillik yoga deneyimi ve Hindistan'da aldigi egitimlerle Elif, ogrencilerine derin bir pratik sunuyor. Hatha ve Vinyasa uzmani.",
  },
  {
    id: 2,
    name: "Ahmet Yilmaz",
    title: "Meditasyon Egitmeni",
    bio: "Zen ve mindfulness geleneklerinde egitim almis Ahmet, rehberli meditasyon seanslarinda huzur ve farkindalik kazandiriyor.",
  },
  {
    id: 3,
    name: "Zeynep Kaya",
    title: "Yin Yoga Uzmani",
    bio: "Restoratif pratikler konusunda uzman Zeynep, bedenin dogal iyilesme surecini destekleyen yavas ve derin bir yaklasim sunuyor.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Nefes Yoga, hayatimdaki en guzel kesflerden biri oldu. Her dersten sonra kendimi yenilanmis hissediyorum. Elif hoca'nin rehberliginde yoga benim icin bir yasam bicimi haline geldi.",
    name: "Ayse Celik",
    title: "Uye, 2 yildir",
  },
  {
    id: 2,
    quote:
      "Is stresinden bunalmis bir sekilde geldim, ic huzurla ayriliyorum. Meditasyon seanslari gercekten hayat degistirici. Bu stuedyonun enerjisi bambaska.",
    name: "Mehmet Ozturk",
    title: "Uye, 1 yildir",
  },
  {
    id: 3,
    quote:
      "Yin Yoga dersleri bel agrilarimda muhtesem bir fark yaratti. Zeynep hoca'nin bilgisi ve sefkatli yaklasimiyla kendimi guvende hissediyorum.",
    name: "Deniz Arslan",
    title: "Uye, 6 aydir",
  },
];
