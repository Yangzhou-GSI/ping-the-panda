'use strict';
const triplet=(en,id,zh)=>({en,id,zh});
const petStandard=STORY.map(s=>({...s}));
const gardenStandard=[
triplet('Ping was in a bad mood. He had snapped at his friend Popo, and now he felt unhappy about it.\n\nHe walked to Brenda’s garden. The purple butterfly was fluttering between leafy vegetables and bright berries. “Would you like to help?” she asked.\n\nPing looked at the tiny plants. He had never grown a garden before. “I can try,” he said. Brenda showed him a pair of gloves. Ping took a slow breath and put them on.',
'Ping sedang kesal. Ia tadi membentak temannya, Popo, dan sekarang ia merasa tidak enak.\n\nIa berjalan ke kebun Brenda. Kupu-kupu ungu itu terbang di antara sayuran berdaun dan buah beri yang cerah. “Mau membantu?” tanyanya.\n\nPing melihat tanaman-tanaman kecil. Ia belum pernah berkebun. “Aku bisa mencoba,” katanya. Brenda menunjukkan sepasang sarung tangan. Ping menarik napas perlahan lalu memakainya.',
'平平心情不好。他刚才对朋友波波发了脾气，现在觉得很难过。\n\n他走到布伦达的花园。紫色蝴蝶在绿叶蔬菜和鲜艳的浆果之间飞舞。“你愿意帮忙吗？”她问。\n\n平平看着小植物。他以前从来没有种过花园。“我可以试试，”他说。布伦达给他看了一副手套。平平慢慢吸了一口气，戴上了手套。'),
triplet('Brenda showed Ping a seed. It was small enough to rest on his paw. “Will this really become a plant?” he asked.\n\nTogether, they found a good place in the soil. Ping made a little hole, put the seed inside, and gently covered it. Then he added a little water.\n\n“Can we eat the vegetables now?” Ping asked. Brenda laughed. “Not yet! Growing takes time.” Ping looked closely at the tiny seedlings nearby. He would need patience as well as his watering can.',
'Brenda menunjukkan sebuah benih kepada Ping. Benih itu cukup kecil untuk diletakkan di telapak tangannya. “Apakah ini benar-benar akan menjadi tanaman?” tanyanya.\n\nBersama-sama, mereka mencari tempat yang baik di tanah. Ping membuat lubang kecil, memasukkan benih, lalu menutupnya dengan lembut. Kemudian ia menambahkan sedikit air.\n\n“Bolehkah kita makan sayurannya sekarang?” tanya Ping. Brenda tertawa. “Belum! Tumbuh itu butuh waktu.” Ping mengamati bibit-bibit kecil di dekatnya. Selain penyiram tanaman, ia juga membutuhkan kesabaran.',
'布伦达给平平看了一颗种子。它很小，可以放在他的手掌上。“它真的会长成植物吗？”他问。\n\n他们一起在土里找了一个合适的位置。平平挖了一个小洞，把种子放进去，轻轻盖上土。然后他浇了一点水。\n\n“现在可以吃蔬菜了吗？”平平问。布伦达笑了。“还不行！生长需要时间。”平平仔细看着旁边的小苗。除了水壶，他还需要耐心。'),
triplet('Ping reached for the watering can again. “Should I give every plant lots and lots of water?” he asked.\n\n“Let us check first,” said Brenda. Plants need suitable light and the right amount of water. Too much or too little water can cause problems. Ping looked at the soil and listened carefully.\n\nHe thought about Popo. “I did not listen to my friend today,” he said. A garden needed attention. A friendship needed attention too. Ping decided to ask Popo how she felt, and really listen to her answer.',
'Ping kembali meraih penyiram tanaman. “Apakah aku harus memberi semua tanaman banyak sekali air?” tanyanya.\n\n“Kita periksa dulu,” kata Brenda. Tanaman membutuhkan cahaya yang sesuai dan air dalam jumlah yang tepat. Terlalu banyak atau terlalu sedikit air bisa menimbulkan masalah. Ping melihat tanah dan mendengarkan dengan saksama.\n\nIa memikirkan Popo. “Hari ini aku tidak mendengarkan temanku,” katanya. Kebun membutuhkan perhatian. Persahabatan juga membutuhkan perhatian. Ping memutuskan untuk menanyakan perasaan Popo dan sungguh-sungguh mendengarkan jawabannya.',
'平平又拿起水壶。“我应该给每一株植物浇好多好多水吗？”他问。\n\n“我们先检查一下，”布伦达说。植物需要合适的光照和适量的水。水太多或太少都可能造成问题。平平看着泥土，仔细听着。\n\n他想到了波波。“今天我没有听朋友说话，”他说。花园需要关心，友谊也需要关心。平平决定问问波波的感受，并认真听她回答。'),
triplet('Brenda gave Ping a basket of vegetables and berries to share. At the garden gate, he saw Popo.\n\n“I am sorry I snapped at you,” Ping said. “Would you like to tell me how you feel?” He waited and listened. Then they talked about playing together another day.\n\nPing offered to share the basket. Being kind would take more than one gift, but he could begin with listening and keeping his promises. He peeked inside the basket and grinned. Carrots, berries, and no bamboo for dinner! What a good day to try something new.',
'Brenda memberi Ping sekeranjang sayuran dan buah beri untuk dibagikan. Di gerbang kebun, ia melihat Popo.\n\n“Maaf aku tadi membentakmu,” kata Ping. “Maukah kamu menceritakan perasaanmu?” Ia menunggu dan mendengarkan. Lalu mereka membicarakan rencana bermain bersama di lain hari.\n\nPing menawarkan isi keranjangnya untuk dibagi. Bersikap baik membutuhkan lebih dari satu hadiah, tetapi ia bisa mulai dengan mendengarkan dan menepati janji. Ia mengintip isi keranjang lalu tersenyum lebar. Wortel, buah beri, dan tidak ada bambu untuk makan malam! Hari yang menyenangkan untuk mencoba sesuatu yang baru.',
'布伦达给平平一篮蔬菜和浆果，让他与大家分享。他在花园门口看到了波波。\n\n“对不起，我刚才对你发脾气了，”平平说，“你愿意告诉我你的感受吗？”他耐心等待，认真听着。然后，他们商量改天一起玩。\n\n平平提出分享篮子里的食物。善待朋友不只是送一次礼物，但他可以从认真倾听和遵守承诺开始。他往篮子里看了看，咧嘴笑了。胡萝卜、浆果，晚饭没有竹子！今天真是尝试新事物的好日子。')];
// Split the complete gardening narrative into eight scene-led illustrated pages.
const gardenEight=gardenStandard.flatMap(scene=>[0,1].map(half=>Object.fromEntries(['en','id','zh'].map(lang=>{const paragraphs=scene[lang].split('\n\n');return [lang,(half===0?paragraphs.slice(0,2):paragraphs.slice(2)).join('\n\n')]}))));
const BOOKS={
pet:{category:'standard',title:['Ping gets a pet','Ping memilih hewan peliharaan','平平选宠物'],desc:['A little kitten. A big promise. Discover what caring really means.','Anak kucing kecil, janji besar. Ayo belajar merawat.','一只小猫，一个大大的承诺。一起学习如何照顾它。'],tag:['Care & responsibility','Kepedulian & tanggung jawab','关心与责任'],titles:JSON.parse(JSON.stringify(SCENE_TITLES)),editions:{standard:petStandard},cover:'/assets/page-6.webp',credit:'Original uploaded book illustrations. Reading text is an adapted learning edition; words printed in the artwork may differ.',alt:SCENE_TITLES.en.map(t=>t+' in the original illustrated pet story'),prompts:STRINGS.prompts,frames:STRINGS.frames,activity:['Make a care plan','Buat rencana perawatan','制定照顾计划'],instructions:['With a grown-up, choose a plant, a pet you already have, or a shared space. Draw or write one way you can help care for it. Try it together, then explain what you did.','Bersama orang dewasa, pilih tanaman, hewan yang sudah dipelihara, atau ruang bersama. Gambar atau tulis satu cara merawatnya. Cobalah bersama, lalu ceritakan yang kamu lakukan.','和大人一起选一株植物、已有的宠物或公共空间。画出或写出一种照顾方法。一起试一试，再说说你做了什么。'],question:['What does a pet need every day?','Apa yang dibutuhkan hewan peliharaan setiap hari?','宠物每天需要什么？'],options:[['Care, food and water','Only a new toy','A different name'],['Perawatan, makanan, dan air','Hanya mainan baru','Nama yang berbeda'],['照顾、食物和水','只要新玩具','不同的名字']]},
garden:{category:'standard',title:['Ping grows a friendship','Ping menumbuhkan persahabatan','平平种下友谊'],desc:['Plant a seed, lend a paw, and discover how friendship grows.','Tanam benih dan temukan cara merawat persahabatan.','种下一颗种子，伸出援手，看看友谊怎样成长。'],tag:['Nature & friendship','Alam & persahabatan','自然与友谊'],titles:{en:['A grumpy visitor','One little seed','Care takes attention','A fresh start'],id:['Tamu yang kesal','Satu benih kecil','Merawat dengan perhatian','Awal yang baru'],zh:['不开心的客人','一颗小种子','细心照顾','新的开始']},editions:{standard:gardenEight},cover:'/assets/garden-1.webp',credit:'New AI-generated illustrations guided by the uploaded books. Adapted from Ping the Panda gardening.',alt:['Ping meets Brenda in her colorful vegetable garden.','Ping plants a seed while Brenda watches.','Ping gently waters a plant in Brenda’s garden.','Ping shares vegetables with Popo at the garden gate.'],prompts:['How can you care for a plant?|What could you say after hurting a friend’s feelings?|How will you show kindness today?','Bagaimana kamu merawat tanaman?|Apa yang bisa kamu katakan setelah menyakiti perasaan teman?|Bagaimana kamu akan berbuat baik hari ini?','你怎样照顾植物？|伤害了朋友的感受后，你可以说什么？|你今天会怎样表达善意？'],frames:['I can care for a plant by …|I am sorry that …|Today I will …','I can care for a plant by …|I am sorry that …|Today I will …','I can care for a plant by …|I am sorry that …|Today I will …'],activity:['Grow something together','Menanam bersama','一起种植'],instructions:['With a grown-up, choose a safe plant to observe. Find out how much light and water it needs. Draw or write what you notice today and again next week. Your job is to notice and care, not to make a perfect plant!','Bersama orang dewasa, pilih tanaman yang aman untuk diamati. Cari tahu kebutuhan cahaya dan airnya. Gambar atau tulis yang kamu amati hari ini dan minggu depan. Tugasmu mengamati dan merawat, bukan membuat tanaman sempurna!','和大人一起选择一株安全的植物，了解它需要多少光和水。画出或写下今天和下周的观察。你的任务是观察和照顾，不是种出完美的植物！'],question:['What helps a friendship grow?','Apa yang membantu persahabatan tumbuh?','什么能帮助友谊成长？'],options:[['Listening and showing care','Never saying sorry','Giving a gift instead of listening'],['Mendengarkan dan menunjukkan perhatian','Tidak pernah meminta maaf','Memberi hadiah tanpa mendengarkan'],['倾听和关心','从不道歉','用礼物代替倾听']]}
};
BOOKS.colors={category:'beginner',title:['Ping knows his colors','Ping mengenal warna','平平认识颜色'],desc:['A bright little book of colors to spot, point to, and say aloud.','Buku kecil penuh warna untuk dilihat, ditunjuk, dan diucapkan.','找一找、指一指、大声说出颜色。'],tag:['Colors & first words','Warna & kata pertama','颜色与启蒙词汇'],titles:{en:['Green, blue, red','Yellow, orange, brown','Purple, white, black'],id:['Hijau, biru, merah','Kuning, oranye, cokelat','Ungu, putih, hitam'],zh:['绿色、蓝色、红色','黄色、橙色、棕色','紫色、白色、黑色']},editions:{standard:[
triplet('Green like the grass.\n\nBlue like the sky.\n\nRed like the firetruck.','Hijau seperti rumput.\n\nBiru seperti langit.\n\nMerah seperti mobil pemadam kebakaran.','绿色像小草。\n\n蓝色像天空。\n\n红色像消防车。'),
triplet('Yellow like the sun.\n\nOrange like an orange.\n\nBrown like the mud.','Kuning seperti matahari.\n\nOranye seperti buah jeruk.\n\nCokelat seperti lumpur.','黄色像太阳。\n\n橙色像橙子。\n\n棕色像泥巴。'),
triplet('Purple like the grapes.\n\nWhite like Ping’s tummy.\n\nBlack like his ears.\n\nPing the Panda knows his colors!','Ungu seperti anggur.\n\nPutih seperti perut Ping.\n\nHitam seperti telinganya.\n\nPing si Panda mengenal warna!','紫色像葡萄。\n\n白色像平平的肚子。\n\n黑色像他的耳朵。\n\n熊猫平平认识颜色！')
]},cover:'/assets/colors-1.webp',credit:'Based on the original beginner manuscript Ping the Panda knows his colors. New AI-generated illustrations follow the established book style.',alt:['Ping plays with a red toy firetruck on green grass under a blue sky.','Ping holds an orange beneath the yellow sun beside brown mud.','Ping holds purple grapes, with his white tummy and dark ears visible.'],prompts:['Which color can you see near you?|What color do you like?|Can you name something that is green?','Warna apa yang terlihat di dekatmu?|Warna apa yang kamu sukai?|Bisakah kamu menyebut benda berwarna hijau?','你身边有什么颜色？|你喜欢什么颜色？|你能说出一个绿色的东西吗？'],frames:['I see …|I like …|The … is green.','I see …|I like …|The … is green.','I see …|I like …|The … is green.'],activity:['Go on a color hunt','Berburu warna','寻找颜色'],instructions:['With a grown-up, find three colors around your home. Point to each one and say its color in English. Draw your favorite object, or tell your grown-up about it.','Bersama orang dewasa, temukan tiga warna di rumah. Tunjuk masing-masing dan sebut warnanya dalam bahasa Inggris. Gambar benda favoritmu atau ceritakan.','和大人一起在家里找到三种颜色。指一指，用英语说出颜色。画出你喜欢的东西，或告诉大人。'],question:['What color is Ping’s toy firetruck?','Apa warna mobil pemadam mainan Ping?','平平的玩具消防车是什么颜色？'],options:[['Red','Blue','Green'],['Merah','Biru','Hijau'],['红色','蓝色','绿色']]};
for(const [id,b] of Object.entries(BOOKS))b.images=b.editions.standard.map((_,i)=>`/assets/${id==='pet'?'page':id}-${i+1}.webp`);

BOOKS.garden.titles={en:['A grumpy visitor','Ready to try','One little seed','Learning to wait','Just enough water','Thinking of Popo','Time to listen','Sharing and caring'],id:['Tamu yang kesal','Siap mencoba','Satu benih kecil','Belajar menunggu','Air secukupnya','Memikirkan Popo','Waktunya mendengarkan','Berbagi dan peduli'],zh:['不开心的客人','准备试一试','一颗小种子','学习等待','适量的水','想起波波','认真倾听','分享与关心']};
BOOKS.garden.images=[1,5,2,6,3,7,8,4].map(n=>`/assets/garden-${n}.webp`);
BOOKS.garden.alt=['Ping arrives at Brenda’s vegetable garden feeling grumpy.','Ping puts on gardening gloves beside a potting bench.','Ping carefully plants a seed in the soil.','Ping patiently watches tiny seedlings with Brenda.','Ping gives a plant a little water.','Ping sits on a bench and thinks about caring for Popo.','Ping listens while Popo tells him how she feels.','Ping shares a basket of vegetables with Popo.'];

// Original illustrated exercise book: preserve all nine PDF pages.
BOOKS.exercise={
  "category": "standard",
  "title": [
    "Ping learns about exercise",
    "Ping belajar berolahraga",
    "平平学习运动"
  ],
  "desc": [
    "Join Ping and Brenda as practice becomes a habit, one small step at a time.",
    "Bersama Ping dan Brenda, jadikan latihan kebiasaan, selangkah demi selangkah.",
    "和平平、布伦达一起，一小步一小步地养成运动习惯。"
  ],
  "tag": [
    "Movement & perseverance",
    "Gerak & ketekunan",
    "运动与坚持"
  ],
  "titles": {
    "en": [
      "A slow morning",
      "The walk to Brenda’s",
      "A new coach",
      "New moves",
      "A difficult start",
      "Practice gets easier",
      "Enjoying exercise",
      "An exercise sheet",
      "What’s for dinner?"
    ],
    "id": [
      "Pagi yang lambat",
      "Perjalanan ke rumah Brenda",
      "Pelatih baru",
      "Gerakan baru",
      "Awal yang sulit",
      "Latihan semakin mudah",
      "Senang berolahraga",
      "Catatan olahraga",
      "Apa makan malamnya?"
    ],
    "zh": [
      "慢吞吞的早晨",
      "去布伦达家",
      "新教练",
      "新的动作",
      "艰难的开始",
      "练习变容易了",
      "享受运动",
      "运动记录表",
      "晚饭吃什么？"
    ]
  },
  "editions": {
    "standard": [
      {
        "en": "Ping felt heavy today.\n\nHe was slow to get out of bed. He was slow to take a shower. He was slow to brush his teeth. He was slow to put on his clothes.\n\nBut he wasn’t slow to eat his breakfast!",
        "id": "Hari ini Ping merasa berat.\n\nIa lambat bangun dari tempat tidur. Ia lambat mandi. Ia lambat menyikat gigi. Ia lambat memakai pakaian.\n\nTetapi ia tidak lambat saat makan sarapan!",
        "zh": "今天平平觉得身体很沉重。\n\n他慢吞吞地起床，慢吞吞地洗澡，慢吞吞地刷牙，慢吞吞地穿衣服。\n\n可是吃早饭时，他一点也不慢！"
      },
      {
        "en": "On his way to Brenda’s house, Ping started to get tired. He didn’t want to walk anymore!\n\nWhen Ping finally got to Brenda’s house, he was so tired he had to go sit on the couch.\n\nBrenda saw how hard he was breathing and thought Ping was out of shape.",
        "id": "Dalam perjalanan ke rumah Brenda, Ping mulai lelah. Ia tidak ingin berjalan lagi!\n\nKetika akhirnya sampai di rumah Brenda, Ping sangat lelah sehingga harus duduk di sofa.\n\nBrenda melihat Ping terengah-engah dan merasa bahwa Ping kurang bugar.",
        "zh": "去布伦达家的路上，平平开始觉得累了。他不想再走了！\n\n平平终于到了布伦达家，累得只能坐到沙发上。\n\n布伦达看见他气喘吁吁，觉得平平的体能不太好。"
      },
      {
        "en": "“Ping, you need to start exercising more if you want to grow into a strong, healthy panda! I’m going to coach you to be in the best shape of your life!”\n\nPing didn’t know how to exercise, but he knew he wanted to be a big, strong panda.\n\nHe wanted to look good so Popo would like him.",
        "id": "“Ping, kamu perlu lebih banyak berolahraga jika ingin tumbuh menjadi panda yang kuat dan sehat! Aku akan melatihmu agar kamu menjadi sangat bugar!”\n\nPing tidak tahu cara berolahraga, tetapi ia tahu bahwa ia ingin menjadi panda yang besar dan kuat.\n\nIa ingin terlihat menarik agar Popo menyukainya.",
        "zh": "“平平，如果你想长成一只强壮、健康的熊猫，就要开始多运动！我会训练你，让你的身体达到最好的状态！”\n\n平平不知道怎样锻炼，但是他知道自己想成为一只高大、强壮的熊猫。\n\n他想让自己看起来更好，让波波喜欢他。"
      },
      {
        "en": "Brenda taught Ping how to do jumping jacks, push-ups, and sit-ups.\n\nHe tried to do a squat, but he couldn’t get down very far.\n\nShe also made him run. A LOT.",
        "id": "Brenda mengajari Ping melakukan jumping jack, push-up, dan sit-up.\n\nIa mencoba melakukan squat, tetapi tidak bisa turun terlalu rendah.\n\nBrenda juga menyuruhnya berlari. BANYAK SEKALI.",
        "zh": "布伦达教平平做开合跳、俯卧撑和仰卧起坐。\n\n他试着做深蹲，但是蹲不下去多深。\n\n她还让他跑步。跑了好多好多。"
      },
      {
        "en": "At first, Ping could only do push-ups on his knees. His chest hurt. A LOT.\n\nWhen Ping did sit-ups, he couldn’t sit all the way up. His stomach hurt. A LOT.\n\nWhen Ping did squats, he couldn’t even get his legs to bend. His legs hurt. A LOT.\n\nWhen Ping did jumping jacks, his arms couldn’t go over his head. His sides hurt. A LOT.\n\nWhen Ping ran, he couldn’t run very far or for very long. He was slow. VERY SLOW.",
        "id": "Awalnya, Ping hanya bisa melakukan push-up dengan bertumpu pada lutut. Dadanya sakit. SAKIT SEKALI.\n\nSaat melakukan sit-up, Ping tidak bisa bangun sepenuhnya. Perutnya sakit. SAKIT SEKALI.\n\nSaat melakukan squat, Ping bahkan tidak bisa menekuk kakinya. Kakinya sakit. SAKIT SEKALI.\n\nSaat melakukan jumping jack, lengannya tidak bisa terangkat melewati kepala. Sisi tubuhnya sakit. SAKIT SEKALI.\n\nSaat berlari, Ping tidak bisa berlari jauh atau lama. Ia lambat. SANGAT LAMBAT.",
        "zh": "起初，平平只能跪着做俯卧撑。他的胸口很疼，非常疼。\n\n做仰卧起坐时，平平不能完全坐起来。他的肚子很疼，非常疼。\n\n做深蹲时，平平甚至弯不下腿。他的腿很疼，非常疼。\n\n做开合跳时，平平的手臂举不过头顶。他的身体两侧很疼，非常疼。\n\n跑步时，平平跑不了很远，也跑不了很久。他跑得很慢，非常慢。"
      },
      {
        "en": "Every day, Ping went to Brenda’s house to exercise, and it got easier.\n\nHe could do ten push-ups without using his knees. His chest still hurt, only a little bit.\n\nHis tummy got smaller, so he could almost do a sit-up. His stomach still hurt, only a little bit.\n\nWhen Ping did jumping jacks, he could almost touch his hands together. His sides didn’t hurt.\n\nPing could even do some squats. But he still couldn’t sit down all the way.\n\nWhen Ping ran, he could run for a long time. He still wasn’t fast, but he wasn’t slow.",
        "id": "Setiap hari, Ping pergi ke rumah Brenda untuk berolahraga, dan latihan terasa semakin mudah.\n\nIa bisa melakukan sepuluh push-up tanpa bertumpu pada lutut. Dadanya masih sakit, tetapi hanya sedikit.\n\nPerutnya mengecil sehingga ia hampir bisa melakukan sit-up. Perutnya masih sakit, tetapi hanya sedikit.\n\nSaat melakukan jumping jack, Ping hampir bisa mempertemukan kedua tangannya. Sisi tubuhnya tidak sakit.\n\nPing bahkan bisa melakukan beberapa squat. Tetapi ia masih belum bisa turun sepenuhnya.\n\nSaat berlari, Ping bisa berlari lama. Ia masih belum cepat, tetapi tidak lagi lambat.",
        "zh": "平平每天都去布伦达家锻炼，运动变得越来越容易了。\n\n他不用跪着就能做十个俯卧撑。他的胸口还有一点点疼。\n\n他的肚子变小了，几乎能做一个完整的仰卧起坐。他的肚子还有一点点疼。\n\n做开合跳时，平平的双手几乎能碰到一起。他的身体两侧不疼了。\n\n平平甚至能做几个深蹲了，但是还不能完全蹲下去。\n\n跑步时，平平能跑很久。他跑得还不快，但也不慢了。"
      },
      {
        "en": "Eventually, Ping loved to exercise. He was strong, he felt good, and he was having fun being healthy.\n\nEven Popo said he was stronger and faster.\n\nBrenda told Ping she didn’t have time to coach him every day. He would have to exercise at home.",
        "id": "Akhirnya, Ping suka berolahraga. Ia kuat, merasa nyaman, dan senang menjadi sehat.\n\nBahkan Popo mengatakan bahwa Ping lebih kuat dan lebih cepat.\n\nBrenda memberi tahu Ping bahwa ia tidak punya waktu untuk melatihnya setiap hari. Ping harus berolahraga di rumah.",
        "zh": "后来，平平爱上了运动。他变强壮了，感觉很好，也享受着健康带来的快乐。\n\n连波波也说他变得更强壮、更快了。\n\n布伦达告诉平平，她没有时间每天训练他。他得在家锻炼了。"
      },
      {
        "en": "Brenda taught Ping how to make an exercise sheet.\n\nOn his exercise sheet, he would write how many push-ups, sit-ups, jumping jacks, and squats he did each day.\n\nThen he would write down how far he ran and how long it took him.\n\nHe would do his exercises one day and run the next day, and take some days to rest.",
        "id": "Brenda mengajari Ping membuat lembar catatan olahraga.\n\nPada lembar itu, ia akan mencatat jumlah push-up, sit-up, jumping jack, dan squat yang dilakukannya setiap hari.\n\nLalu ia akan mencatat jarak larinya dan waktu yang dibutuhkan.\n\nIa akan berlatih gerakan pada satu hari, berlari keesokan harinya, dan mengambil beberapa hari untuk beristirahat.",
        "zh": "布伦达教平平制作一张运动记录表。\n\n他会在表上写下每天做了多少个俯卧撑、仰卧起坐、开合跳和深蹲。\n\n然后，他会写下跑了多远、用了多长时间。\n\n他会一天练习动作，第二天跑步，也安排一些日子休息。"
      },
      {
        "en": "That night, Ping was thinking about how he was going to get stronger and faster.\n\nEvery day, he would run a little faster or do more push-ups until he was really strong and very fast.\n\nThen his mom put a big bowl of bamboo in front of him for dinner.\n\n“OH NO,” said Ping. “I HATE BAMBOO.”",
        "id": "Malam itu, Ping memikirkan cara menjadi lebih kuat dan lebih cepat.\n\nSetiap hari, ia akan berlari sedikit lebih cepat atau melakukan lebih banyak push-up sampai ia benar-benar kuat dan sangat cepat.\n\nLalu ibunya meletakkan semangkuk besar bambu di hadapannya untuk makan malam.\n\n“OH TIDAK,” kata Ping. “AKU BENCI BAMBU.”",
        "zh": "那天晚上，平平想着怎样变得更强壮、更快。\n\n他打算每天跑快一点，或者多做几个俯卧撑，直到自己非常强壮、跑得非常快。\n\n这时，妈妈把一大碗竹子放在他面前，当作晚饭。\n\n“哦，不！”平平说，“我讨厌竹子。”"
      }
    ]
  },
  "cover": "/assets/exercise-1.webp",
  "images": [
    "/assets/exercise-1.webp",
    "/assets/exercise-2.webp",
    "/assets/exercise-3.webp",
    "/assets/exercise-4.webp",
    "/assets/exercise-5.webp",
    "/assets/exercise-6.webp",
    "/assets/exercise-7.webp",
    "/assets/exercise-8.webp",
    "/assets/exercise-9.webp"
  ],
  "credit": "Original nine-page illustrated exercise book from Ping_02.pdf. Original artwork and page layouts are preserved. Selectable English text follows the original story with normalized punctuation and spelling; Indonesian and Chinese translations are learning aids.",
  "alt": [
    "Ping slowly gets ready for the day, then enjoys breakfast.",
    "Ping walks to Brenda’s house and rests on her couch.",
    "Brenda offers to coach Ping, who imagines Popo.",
    "Brenda shows Ping several exercises and running.",
    "A wide illustrated spread of Ping finding the new exercises difficult.",
    "A wide illustrated spread of Ping finding practice easier.",
    "Ping, Popo and Brenda enjoy time together outdoors.",
    "Brenda helps Ping make an exercise record.",
    "Ping imagines getting stronger, then finds bamboo for dinner."
  ],
  "prompts": [
    "What did Ping learn through practice?|What do you enjoy practising?|How could you record your progress?",
    "Apa yang dipelajari Ping melalui latihan?|Apa yang senang kamu latih?|Bagaimana kamu mencatat kemajuanmu?",
    "平平通过练习学到了什么？|你喜欢练习什么？|你怎样记录自己的进步？"
  ],
  "frames": [
    "At first, Ping …|I enjoy …|I can record …",
    "At first, Ping …|I enjoy …|I can record …",
    "At first, Ping …|I enjoy …|I can record …"
  ],
  "activity": [
    "Make a movement journal",
    "Buat jurnal gerak",
    "制作运动日记"
  ],
  "instructions": [
    "With a grown-up, choose a comfortable movement you enjoy, such as walking, dancing, or stretching. Draw or write what you tried and how you felt. Rest when you need to. If anything hurts, stop and tell your grown-up. Your journal celebrates taking part, not comparing bodies or scores.",
    "Bersama orang dewasa, pilih gerakan nyaman yang kamu sukai, seperti berjalan, menari, atau peregangan. Gambar atau tulis apa yang dicoba dan perasaanmu. Beristirahatlah saat perlu. Jika terasa sakit, berhenti dan beri tahu orang dewasa. Jurnalmu merayakan partisipasi, bukan membandingkan tubuh atau nilai.",
    "和大人一起选择喜欢而且舒适的活动，比如散步、跳舞或伸展。画出或写下你尝试了什么、感觉如何。需要时就休息。如果疼痛，就停下来告诉大人。日记是为了庆祝参与，不是比较身材或成绩。"
  ],
  "question": [
    "What does Ping use to record his practice?",
    "Apa yang digunakan Ping untuk mencatat latihannya?",
    "平平用什么记录练习？"
  ],
  "options": [
    [
      "An exercise sheet",
      "A shopping list",
      "A pet’s bowl"
    ],
    [
      "Lembar catatan olahraga",
      "Daftar belanja",
      "Mangkuk hewan"
    ],
    [
      "运动记录表",
      "购物清单",
      "宠物碗"
    ]
  ]
};

if(typeof PingCore!=='undefined')PingCore.setBookPageCounts(Object.fromEntries(Object.entries(BOOKS).map(([id,b])=>[id,b.editions.standard.length])));
