export interface MemoryPhoto {
  id: string;
  url: string;
  caption: string;
  date?: string;
  rotation: number; // องศาเอียงของรูป เช่น -4, 3, -2, 5 เพื่อให้ดูเป็น scrapbook ทำมือ
  tag: string;
  note?: string;
}

export interface LoveReason {
  id: string;
  title: string;
  description: string;
  sticker: string; // อีโมจิหรือสติกเกอร์
  color: string; // สีพื้นหลังพาสเทล
  rotation: number;
}

export interface BirthdayConfig {
  momName: string;
  subtitle: string;
  letter: {
    salutation: string;
    paragraphs: string[];
    closing: string;
    signOff: string;
  };
  memories: MemoryPhoto[];
  reasonsToLove: LoveReason[];
  surprise: {
    boxLabel: string;
    greeting: string;
    message: string;
    subtext: string;
    coupons: { title: string; desc: string; icon: string }[];
  };
  wishes: {
    prompt: string;
    candlesCount: number;
    wishTitle: string;
    wishMessage: string;
    closingBlessing: string;
  };
  music: {
    title: string;
    artist: string;
    audioUrl: string; // ลิงก์ไฟล์เพลง mp3
  };
}

export const BIRTHDAY_DATA: BirthdayConfig = {
  momName: "หม่าม้า",
  subtitle: "ของขวัญชิ้นเล็กๆ ที่ตั้งใจทำให้แม่ด้วยความรักทั้งหมดที่มี",
  letter: {
    salutation: "ถึง Mom,",
    paragraphs: [
      "ขอให้มีความสุขมากๆเลยนะไม่เจ็บไข้ได้ป่วยไม่มีโรคภัยไข้เจ็บขอให้ไปทำงานไม่สายนะดูแลสุขภาพร่างกายแข็งแรงอยู่กันไปนานๆขอให้มีแต่เรื่องดีๆเข้ามาในชีวิตจ่ะไม่ต้องมีเรื่องเครียดมากน้้ะจ้ะ"
    ],
    closing: "Happy birth day น้ะะ,",
    signOff: "มิกมิว "
  },
  memories: [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      caption: "รอยยิ้มที่สดใสที่สุดของแม่ ✨",
      date: "ช่วงเวลาดีๆ",
      rotation: -3,
      tag: "รอยยิ้มของแม่",
      note: "รอยยิ้มที่คอยเติมพลังและทำให้บ้านของเราอบอุ่นเสมอ"
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
      caption: "ดอกไม้สวยๆ เหมือนความอ่อนโยนของแม่ 🌸",
      date: "วันพักผ่อน",
      rotation: 4,
      tag: "ความสุขสงบ",
      note: "จำได้เสมอตอนที่ได้ไปเดินเล่นชมสวนด้วยกัน"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      caption: "จิบชากับการพูดคุยที่แสนอบอุ่น ☕",
      date: "ยามบ่ายที่แสนสุข",
      rotation: -2,
      tag: "คุยกันสบายๆ",
      note: "บทสนทนาเรื่องเล็กๆ น้อยๆ ในชีวิตประจำวันที่มีค่าที่สุด"
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
      caption: "ร่วมฉลองอีกหนึ่งปีที่สวยงามด้วยกัน 🎂",
      date: "วันพิเศษ",
      rotation: 3,
      tag: "วันฉลอง",
      note: "ขอให้ปีนี้และทุกปีเต็มไปด้วยเสียงหัวเราะ"
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      caption: "ทริปครอบครัวและวิวทะเลสวยๆ 🌊",
      date: "วันหยุดพักผ่อน",
      rotation: -4,
      tag: "ไปด้วยกัน",
      note: "ช่วงเวลาที่เราได้ไปเที่ยวและนั่งมองทะเลด้วยกัน"
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
      caption: "ช่วงเวลาธรรมดาที่เต็มไปด้วยความรัก 💖",
      date: "บ้านที่อบอุ่น",
      rotation: 2,
      tag: "น่าจดจำ",
      note: "ไม่มีที่ไหนจะอบอุ่นและปลอดภัยเท่าที่ที่อยู่กับแม่"
    }
  ],
  reasonsToLove: [
    {
      id: "r1",
      title: "ความอ่อนโยนและใจดีของแม่",
      description: "แม่ปฏิบัติต่อทุกคนด้วยความเมตตาและเข้าใจคนอื่นเสมอ แม้ในวันที่โลกเร่งรีบ",
      sticker: "🌸",
      color: "#FFF0F3", // ชมพูพาสเทล
      rotation: -2
    },
    {
      id: "r2",
      title: "อ้อมกอดที่อบอุ่นที่สุด",
      description: "กอดของแม่คือเซฟโซนที่ดีที่สุดเสมอ ไม่ว่าจะเหนื่อยหรือท้อมาจากไหน แค่กอดแม่ก็หาย",
      sticker: "🧸",
      color: "#FEF6E9", // พีชอบอุ่น
      rotation: 2.5
    },
    {
      id: "r3",
      title: "กับข้าวฝีมือแม่ที่อร่อยที่สุด",
      description: "ทุกเมนูที่แม่ตั้งใจทำ มีเครื่องปรุงลับสุดพิเศษคือความรักและความใส่ใจที่ไม่เหมือนใคร",
      sticker: "🍲",
      color: "#F3F7EC", // เขียวเซจสบายตา
      rotation: -1.5
    },
    {
      id: "r4",
      title: "ความเอาใจใส่ในทุกรายละเอียด",
      description: "แม่มักจะคอยสังเกตความเป็นอยู่ของทุกคน คอยถามเสมอว่ากินข้าวหรือยัง พักผ่อนบ้างไหม",
      sticker: "💌",
      color: "#F6F0FA", // ลาเวนเดอร์อ่อน
      rotation: 3
    },
    {
      id: "r5",
      title: "รอยยิ้มและเสียงหัวเราะของแม่",
      description: "เวลาที่แม่ยิ้มและมีความสุข บรรยากาศรอบตัวจะสดใสและทำให้ทุกคนมีความสุขตามไปด้วย",
      sticker: "✨",
      color: "#FFFBEA", // เหลืองบัตเตอร์
      rotation: -2.5
    },
    {
      id: "r6",
      title: "ทุกหยาดเหงื่อและความทุ่มเทเพื่อครอบครัว",
      description: "แม่ทำทุกอย่างเพื่อครอบครัวมาโดยตลอดโดยไม่เคยบ่น แม่คือเสาหลักและคนสำคัญที่สุดของบ้าน",
      sticker: "🌷",
      color: "#FDF2F4", // กุหลาบอบอุ่น
      rotation: 1.8
    }
  ],
  surprise: {
    boxLabel: "ของขวัญชิ้นพิเศษสำหรับแม่",
    greeting: "สุขสันต์วันเกิดครับ/ค่ะแม่! 🎁✨",
    message: "นี่คือคูปองสัญญาใจพิเศษจากหนู ที่แม่สามารถกดใช้สิทธิ์ได้ทุกเมื่อที่ต้องการ:",
    subtext: "กดที่ปุ่มในคูปองเพื่อใช้สิทธิ์แห่งความรักได้เลย!",
    coupons: [
      {
        title: "คูปองวันพักผ่อนสบายๆ",
        desc: "วันนี้แม่ไม่ต้องทำอะไรเลย หนูจะดูแล จัดการงานบ้าน และคอยบริการนวดให้ทั้งวัน",
        icon: "💆‍♀️"
      },
      {
        title: "คูปองดินเนอร์ฝีมือลูก",
        desc: "หนูจะทำเมนูที่แม่ชอบทานให้สุดฝีมือ พร้อมล้างจานเก็บกวาดให้เรียบร้อย",
        icon: "🍳"
      },
      {
        title: "คูปองพาแม่ไปเที่ยว 1 วัน",
        desc: "ทริปไปคาเฟ่ ช้อปปิ้ง ไหว้พระ หรือที่ไหนก็ได้ที่แม่อยากไป หนูเป็นสารถีให้ตลอดทริป",
        icon: "🚗"
      },
      {
        title: "คูปองกอดอุ่นๆ ไม่จำกัดจำนวน",
        desc: "ไม่มีวันหมดอายุ สามารถขอกอดเติมพลังใจได้ตลอด 24 ชั่วโมง",
        icon: "🫂"
      }
    ]
  },
  wishes: {
    prompt: "อธิษฐานแล้วแตะที่เทียนเพื่อเป่าเทียนวันเกิดได้เลย! 🎂✨",
    candlesCount: 3,
    wishTitle: "คำอธิษฐานเป็นดั่งที่สมหวังน้า ✨",
    wishMessage: "ขอให้สิ่งที่ขอพรสมหวังดั่งใจหมายน้า ของขวัญเดียวที่ให้ได้ในตอนนี้อะนะก็จะพยายามอ่านหนังสือเข้ามหาลัยให้ได้จ้าาาา",
    closingBlessing: "สุขสันต์วันเกิดน้า ♡"
  },
  music: {
    title: "Happy Birthday to Mom",
    artist: "Acoustic Piano Version",
    audioUrl: "/hbd.mp3"
  }
};
