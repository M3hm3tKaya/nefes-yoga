import type { ClassItem, ScheduleRow, Instructor, Testimonial, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Dersler", href: "#dersler" },
  { label: "Takvim", href: "#takvim" },
  { label: "İletişim", href: "#iletisim" },
];

export const CLASSES: ClassItem[] = [
  {
    id: 1,
    name: "Hatha Yoga",
    description:
      "Temel duruşlar ve nefes teknikleriyle bedeninizi ve zihninizi dengelemenin en güzel yolu. Yeni başlayanlar için ideal.",
    duration: "60 dk",
    level: "Temel",
    image: "/images/class-hatha.png",
  },
  {
    id: 2,
    name: "Vinyasa Flow",
    description:
      "Dinamik akış hareketleriyle nefes ve bedeni senkronize edin. Güç ve esneklik bir arada.",
    duration: "75 dk",
    level: "Orta",
    image: "/images/class-vinyasa.png",
  },
  {
    id: 3,
    name: "Yin Yoga",
    description:
      "Yavaş tempolu, derin germe odaklı pratik. Bağlı dokuları rahatlatır, iç huzur sağlar.",
    duration: "90 dk",
    level: "Restoratif",
    image: "/images/class-yin.png",
  },
  {
    id: 4,
    name: "Meditasyon",
    description:
      "Rehberli meditasyon seansları ile zihninizi sakinleştirin, farkındalık ve odaklanma geliştirin.",
    duration: "45 dk",
    level: "Herkes",
    image: "/images/class-meditation.png",
  },
];

export const SCHEDULE_DAYS = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

export const SCHEDULE_PERIODS = ["Sabah", "Öğle", "Akşam"];

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
  // Öğle
  [
    null,
    { className: "Yin Yoga", time: "12:00" },
    null,
    { className: "Hatha Yoga", time: "12:00" },
    null,
    { className: "Vinyasa Flow", time: "11:00" },
    { className: "Yin Yoga", time: "11:00" },
  ],
  // Akşam
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
    name: "Elif Doğan",
    title: "Kurucu & Baş Eğitmen",
    bio: "15 yıllık yoga deneyimi ve Hindistan'da aldığı eğitimlerle Elif, öğrencilerine derin bir pratik sunuyor. Hatha ve Vinyasa uzmanı.",
    image: "/images/instructor-1.png",
  },
  {
    id: 2,
    name: "Ahmet Yılmaz",
    title: "Meditasyon Eğitmeni",
    bio: "Zen ve mindfulness geleneklerinde eğitim almış Ahmet, rehberli meditasyon seanslarında huzur ve farkındalık kazandırıyor.",
    image: "/images/instructor-2.png",
  },
  {
    id: 3,
    name: "Zeynep Kaya",
    title: "Yin Yoga Uzmanı",
    bio: "Restoratif pratikler konusunda uzman Zeynep, bedenin doğal iyileşme sürecini destekleyen yavaş ve derin bir yaklaşım sunuyor.",
    image: "/images/instructor-3.png",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Nefes Yoga, hayatımdaki en güzel keşiflerden biri oldu. Her dersten sonra kendimi yenilenmiş hissediyorum. Elif hoca'nın rehberliğinde yoga benim için bir yaşam biçimi haline geldi.",
    name: "Ayşe Çelik",
    title: "Üye, 2 yıldır",
  },
  {
    id: 2,
    quote:
      "İş stresinden bunalmış bir şekilde geldim, iç huzurla ayrılıyorum. Meditasyon seansları gerçekten hayat değiştirici. Bu stüdyonun enerjisi bambaşka.",
    name: "Mehmet Öztürk",
    title: "Üye, 1 yıldır",
  },
  {
    id: 3,
    quote:
      "Yin Yoga dersleri bel ağrılarımda muhteşem bir fark yarattı. Zeynep hoca'nın bilgisi ve şefkatli yaklaşımıyla kendimi güvende hissediyorum.",
    name: "Deniz Arslan",
    title: "Üye, 6 aydır",
  },
];
