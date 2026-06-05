// ═══════════════════════════════════════════════════
//  SONGS DATA
// ═══════════════════════════════════════════════════
export const SONGS = [
  { id: 1,  title: "Blinding Lights",    artist: "The Weeknd",         album: "After Hours",               duration: 200, gradient: "linear-gradient(135deg,#FF0055,#6B0000)" },
  { id: 2,  title: "Shape of You",       artist: "Ed Sheeran",         album: "÷ (Divide)",                duration: 234, gradient: "linear-gradient(135deg,#7C3AED,#1D4ED8)" },
  { id: 3,  title: "Dance Monkey",       artist: "Tones and I",        album: "The Kids Are Coming",       duration: 210, gradient: "linear-gradient(135deg,#F59E0B,#B45309)" },
  { id: 4,  title: "Watermelon Sugar",   artist: "Harry Styles",       album: "Fine Line",                 duration: 174, gradient: "linear-gradient(135deg,#10B981,#047857)" },
  { id: 5,  title: "Levitating",         artist: "Dua Lipa",           album: "Future Nostalgia",          duration: 203, gradient: "linear-gradient(135deg,#8B5CF6,#7C3AED)" },
  { id: 6,  title: "Good 4 U",           artist: "Olivia Rodrigo",     album: "SOUR",                      duration: 178, gradient: "linear-gradient(135deg,#EC4899,#9D174D)" },
  { id: 7,  title: "Stay",               artist: "The Kid LAROI",      album: "F*CK LOVE 3",               duration: 141, gradient: "linear-gradient(135deg,#06B6D4,#0284C7)" },
  { id: 8,  title: "Peaches",            artist: "Justin Bieber",      album: "Justice",                   duration: 198, gradient: "linear-gradient(135deg,#F97316,#EA580C)" },
  { id: 9,  title: "Montero",            artist: "Lil Nas X",          album: "MONTERO",                   duration: 137, gradient: "linear-gradient(135deg,#EF4444,#B91C1C)" },
  { id: 10, title: "drivers license",    artist: "Olivia Rodrigo",     album: "SOUR",                      duration: 242, gradient: "linear-gradient(135deg,#3B82F6,#2563EB)" },
  { id: 11, title: "Save Your Tears",    artist: "The Weeknd",         album: "After Hours",               duration: 215, gradient: "linear-gradient(135deg,#D946EF,#A21CAF)" },
  { id: 12, title: "Beggin'",            artist: "Måneskin",           album: "Teatro d'ira Vol. I",       duration: 213, gradient: "linear-gradient(135deg,#F59E0B,#D97706)" },
  { id: 13, title: "bad guy",            artist: "Billie Eilish",      album: "WHEN WE ALL FALL ASLEEP",   duration: 194, gradient: "linear-gradient(135deg,#84CC16,#4D7C0F)" },
  { id: 14, title: "ROCKSTAR",           artist: "DaBaby",             album: "KIRK",                      duration: 218, gradient: "linear-gradient(135deg,#6366F1,#4338CA)" },
  { id: 15, title: "Circles",            artist: "Post Malone",        album: "Hollywood's Bleeding",      duration: 215, gradient: "linear-gradient(135deg,#14B8A6,#0F766E)" },
  { id: 16, title: "Dynamite",           artist: "BTS",                album: "Dynamite",                  duration: 199, gradient: "linear-gradient(135deg,#F472B6,#DB2777)" },
  { id: 17, title: "Heat Waves",         artist: "Glass Animals",      album: "Dreamland",                 duration: 238, gradient: "linear-gradient(135deg,#FB923C,#DC2626)" },
  { id: 18, title: "As It Was",          artist: "Harry Styles",       album: "Harry's House",             duration: 167, gradient: "linear-gradient(135deg,#A78BFA,#6D28D9)" },
  { id: 19, title: "Anti-Hero",          artist: "Taylor Swift",       album: "Midnights",                 duration: 200, gradient: "linear-gradient(135deg,#38BDF8,#0C4A6E)" },
  { id: 20, title: "Flowers",            artist: "Miley Cyrus",        album: "Endless Summer Vacation",   duration: 200, gradient: "linear-gradient(135deg,#FDE68A,#F59E0B)" },
];

// ═══════════════════════════════════════════════════
//  PLAYLISTS DATA
// ═══════════════════════════════════════════════════
export const PLAYLISTS = [
  { id: 1, name: "Today's Top Hits",    desc: "Jung Kook is on top of the Hottest 50!",             songs: [1,2,3,4,5,6,7,8],       gradient: "linear-gradient(135deg,#E91E63,#C2185B)" },
  { id: 2, name: "RapCaviar",           desc: "New music from Drake, Lil Baby and more.",           songs: [9,10,11,12,13,14],       gradient: "linear-gradient(135deg,#7C3AED,#4C1D95)" },
  { id: 3, name: "All Out 2010s",       desc: "The biggest songs of the 2010s.",                   songs: [13,14,15,16,1,2],        gradient: "linear-gradient(135deg,#0EA5E9,#0C4A6E)" },
  { id: 4, name: "Rock Classics",       desc: "Rock legends & epic guitar anthems.",               songs: [1,3,5,7,9,11],          gradient: "linear-gradient(135deg,#EF4444,#7F1D1D)" },
  { id: 5, name: "Mood Booster",        desc: "Get happy with today's feel-good hits!",            songs: [2,4,6,8,10,12],         gradient: "linear-gradient(135deg,#F59E0B,#92400E)" },
  { id: 6, name: "Peaceful Piano",      desc: "Relax and indulge with beautiful piano.",           songs: [10,12,14,16,2,4],       gradient: "linear-gradient(135deg,#10B981,#064E3B)" },
  { id: 7, name: "Chill Hits",          desc: "Kick back to the best new and recent chill hits.",  songs: [17,18,19,20,4,5],       gradient: "linear-gradient(135deg,#6366F1,#1E1B4B)" },
  { id: 8, name: "Pop Rising",          desc: "The future of pop is here. Hot new artists.",       songs: [19,20,6,8,10,16],       gradient: "linear-gradient(135deg,#F43F5E,#9F1239)" },
];

// ═══════════════════════════════════════════════════
//  ARTISTS DATA
// ═══════════════════════════════════════════════════
export const ARTISTS = [
  { id: 1, name: "The Weeknd",     listeners: "87.5M", gradient: "linear-gradient(135deg,#FF0055,#6B0000)" },
  { id: 2, name: "Dua Lipa",       listeners: "68.2M", gradient: "linear-gradient(135deg,#8B5CF6,#5B21B6)" },
  { id: 3, name: "Ed Sheeran",     listeners: "82.1M", gradient: "linear-gradient(135deg,#F59E0B,#92400E)" },
  { id: 4, name: "Billie Eilish",  listeners: "75.3M", gradient: "linear-gradient(135deg,#84CC16,#365314)" },
  { id: 5, name: "Post Malone",    listeners: "59.8M", gradient: "linear-gradient(135deg,#14B8A6,#134E4A)" },
  { id: 6, name: "Taylor Swift",   listeners: "93.2M", gradient: "linear-gradient(135deg,#38BDF8,#0C4A6E)" },
];

// ═══════════════════════════════════════════════════
//  CATEGORIES DATA
// ═══════════════════════════════════════════════════
export const CATEGORIES = [
  { name: "Pop",        gradient: "linear-gradient(135deg,#E91E63,#880E4F)" },
  { name: "Hip-Hop",   gradient: "linear-gradient(135deg,#7C3AED,#4C1D95)" },
  { name: "Rock",       gradient: "linear-gradient(135deg,#EF4444,#7F1D1D)" },
  { name: "R&B",        gradient: "linear-gradient(135deg,#F97316,#7C2D12)" },
  { name: "Electronic", gradient: "linear-gradient(135deg,#06B6D4,#0E7490)" },
  { name: "K-Pop",      gradient: "linear-gradient(135deg,#F472B6,#BE185D)" },
  { name: "Latin",      gradient: "linear-gradient(135deg,#10B981,#064E3B)" },
  { name: "Jazz",       gradient: "linear-gradient(135deg,#F59E0B,#92400E)" },
  { name: "Classical",  gradient: "linear-gradient(135deg,#6366F1,#3730A3)" },
  { name: "Country",    gradient: "linear-gradient(135deg,#84CC16,#3F6212)" },
  { name: "Indie",      gradient: "linear-gradient(135deg,#EC4899,#9D174D)" },
  { name: "Podcasts",   gradient: "linear-gradient(135deg,#14B8A6,#134E4A)" },
];
