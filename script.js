const saveData = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error("Error saving data to localStorage", e);
    }
};

const loadData = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error("Error loading data from localStorage", e);
        return null;
    }
};

const getTodayDateString = () => new Date().toLocaleDateString('en-CA');

const TYPES = { FISH: "fish", CREATURE: "creature", MONSTER: "monster", ITEM: "item" };
const LOCATIONS = { PARADISE_ISLAND: "paradise_island", MARINE: "marine", GREAT_LAKES: "great_lakes" };
const RARITIES = { COMMON: "common", RARE: "rare", EPIC: "epic", LEGENDARY: "legendary" };
const UNIQUE_FEATURE_TYPES = { RARITY: "rarity", DESCRIPTION: "description" };

// --- DATABASE ---
const database = [
  // Paradise Island
  { id: 1, name: "bluefish", image: "bluefish.webp", type: TYPES.FISH, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 2, name: "largetooth flounder", image: "largetooth_flounder.webp", type: TYPES.FISH, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 3, name: "bonefish", image: "bonefish.webp", type: TYPES.FISH, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "night", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 4, name: "green humphead parrotfish", image: "green_humphead_parrotfish.webp", type: TYPES.FISH, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.RARE },
  { id: 5, name: "white tuna", image: "white_tuna.webp", type: TYPES.FISH, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.RARE },
  { id: 6, name: "pelagic stingray", image: "pelagic_stingray.webp", type: TYPES.FISH, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.EPIC },
  { id: 7, name: "pacific footballfish", image: "pacific_footballfish.webp", type: TYPES.FISH, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "night", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.EPIC },
  { id: 8, name: "clownfish", image: "clownfish.webp", type: TYPES.FISH, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 9, name: "snubnose pompano", image: "snubnose_pompano.webp", type: TYPES.FISH, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 10, name: "spot-fin porcupinefish", image: "spot-fin_porcupinefish.webp", type: TYPES.FISH, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 11, name: "longtail tuna", image: "longtail_tuna.webp", type: TYPES.FISH, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 12, name: "blue trevally", image: "blue_trevally.webp", type: TYPES.FISH, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 13, name: "flower tube sea anemone", image: "flower_tube_sea_anemone.webp", type: TYPES.CREATURE, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 14, name: "red starfish", image: "red_starfish.webp", type: TYPES.CREATURE, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 15, name: "peacock mantis shrimp", image: "peacock_mantis_shrimp.webp", type: TYPES.CREATURE, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "night", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 16, name: "mimic octopus", image: "mimic_octopus.webp", type: TYPES.CREATURE, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.RARE },
  { id: 17, name: "sand striker", image: "sand_striker.webp", type: TYPES.CREATURE, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 18, name: "shreeder", image: "shreeder.webp", type: TYPES.MONSTER, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.LEGENDARY },
  { id: 19, name: "wilson ball", image: "wilson_ball.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "it looks like he's looking for a new friend" },
  { id: 20, name: "empty bottle", image: "empty_bottle.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "how do they put the little ships in these bottles" },
  { id: 21, name: "rubber duck", image: "rubber_duck.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "this is a must-have during the shower" },
  { id: 22, name: "plastic bag", image: "plastic_bag.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "i don't think we'll ever get them off the ocean" },
  { id: 23, name: "sea weed", image: "sea_weed.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "it looks pretty tasty" },
  { id: 24, name: "mask", image: "mask.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "this is a new threat to sea creatures" },
  { id: 25, name: "straw hat", image: "straw_hat.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "maybe the rest lies somewhere" },
  { id: 26, name: "old phone", image: "old_phone.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "i wonder what those buttons were for" },
  { id: 27, name: "plastic bottle paradise island", image: "plastic_bottle_paradise_island.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "better to recycle it" },
  { id: 28, name: "pinacolada drink", image: "pinacolada_drink.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "that's refreshing" },
  { id: 29, name: "gear", image: "gear.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "i think there are submarines here" },
  { id: 30, name: "message in a bottle", image: "message_in_a_bottle.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "hopefully there's a treasure map inside" },
  { id: 31, name: "can fish", image: "can_fish.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "irony of fate, canned fish have returned to the sea" },
  { id: 32, name: "kelp leaf", image: "kelp_leaf.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "it always rubs your legs while swimming" },
  { id: 33, name: "key with a skull", image: "key_with_a_skull.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "this is how the pirate stories begin" },
  { id: 34, name: "chest with a skull", image: "chest_with_a_skull.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "looks like a nice exhibit" },
  { id: 35, name: "flip flops", image: "flip_flops.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "a cult model, maybe there is a second one somewhere" },
  { id: 36, name: "can", image: "can.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "this should go to the garbage can" },
  { id: 37, name: "chips", image: "chips.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "still salted and crispy" },
  { id: 38, name: "lunch box", image: "lunch_box.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "mini-cabinet for snacks or screws" },
  { id: 39, name: "fridge magnet paradise island", image: "fridge_magnet_paradise_island.webp", type: TYPES.ITEM, location: LOCATIONS.PARADISE_ISLAND, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "the only magnet that attracts attention, not metals" },
  // Marine
  { id: 40, name: "anchovy", image: "anchovy.webp", type: TYPES.FISH, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 41, name: "blobfish", image: "blobfish.webp", type: TYPES.FISH, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.EPIC },
  { id: 42, name: "brisling", image: "brisling.webp", type: TYPES.FISH, location: LOCATIONS.MARINE, time_of_day: "night", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 43, name: "gilt-head bream", image: "gilt-head_bream.webp", type: TYPES.FISH, location: LOCATIONS.MARINE, time_of_day: "night", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 44, name: "mudskipper", image: "mudskipper.webp", type: TYPES.FISH, location: LOCATIONS.MARINE, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 45, name: "sardine", image: "sardine.webp", type: TYPES.FISH, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 46, name: "striped red mullet", image: "striped_red_mullet.webp", type: TYPES.FISH, location: LOCATIONS.MARINE, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 47, name: "hermit crab", image: "hermit_crab.webp", type: TYPES.CREATURE, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 48, name: "hermit crab2", image: "hermit_crab2.webp", type: TYPES.CREATURE, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 49, name: "fire urchin", image: "fire_urchin.webp", type: TYPES.CREATURE, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 50, name: "worm snail", image: "worm_snail.webp", type: TYPES.CREATURE, location: LOCATIONS.MARINE, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 51, name: "nudibranch", image: "nudibranch.webp", type: TYPES.CREATURE, location: LOCATIONS.MARINE, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 52, name: "common starfish", image: "common_starfish.webp", type: TYPES.CREATURE, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 53, name: "common seashell", image: "common_seashell.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "Just your everyday beach shell. Nothing special - or is it?" },
  { id: 54, name: "fridge magnet marina", image: "fridge_magnet_marina.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "It doesn’t fly, but it holds tight." },
  { id: 55, name: "grey rock", image: "grey_rock.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "It looks like the one I threw away yesterday." },
  { id: 56, name: "old plank", image: "old_plank.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "I'll still make something out of this." },
  { id: 57, name: "sailing rope", image: "sailing_rope.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "a guide to knots, frustration, and tangled dreams." },
  { id: 58, name: "sea grass", image: "sea_grass.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "Who cuts sea grass, and how? that's interesting!" },
  { id: 59, name: "steering wheel", image: "steering_wheel.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "The oldest GPS in the world." },
  { id: 60, name: "striped beach shell", image: "striped_beach_shell.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "A seaside classic." },
  { id: 61, name: "tiny pink shell", image: "tiny_pink_shell.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "Small, pink, and perfect." },
  { id: 62, name: "tourist brochure-alaska", image: "tourist_brochure-alaska.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "Oh wow, it’s actually cold to the touch, like Alaska" },
  { id: 63, name: "tourist brochure-amazon", image: "tourist_brochure-amazon.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "In a place like this, you can feel like a real explorer" },
  { id: 64, name: "tourist brochure-australia", image: "tourist_brochure-australia.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "Oh! So this is where the legendary monster lives" },
  { id: 65, name: "tourist brochure-costa rica", image: "tourist_brochure-costa_rica.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "Looks like a paradise for anglers!" },
  { id: 66, name: "tourist brochure-great lakes", image: "tourist_brochure-great_lakes.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "Wow! i wonder if it looks this good in real life" },
  { id: 67, name: "tourist brochure-paradise island", image: "tourist_brochure-paradise_island.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "i wonder if they wrote about this area." },
  { id: 68, name: "tourist brochure-scotland", image: "tourist_brochure-scotland.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "This looks stunning!" },
  { id: 69, name: "tourist brochure-thailand", image: "tourist_brochure-thailand.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "Impressive... The sea, the jungle, and wild nature" },
  { id: 70, name: "turban shell", image: "turban_shell.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "How do snails know what shape their shell is supposed to be?!" },
  { id: 71, name: "urchin shell", image: "urchin_shell.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "So cool! It looks like a fossil." },
  { id: 72, name: "whale bone", image: "whale_bone.webp", type: TYPES.ITEM, location: LOCATIONS.MARINE, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "I saw something similar in Crazy Dino Park!" },
  // Great Lakes (IDs 73-137) - Przenumerowane
  { id: 73, name: "alewife", image: "alewife.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 74, name: "american eel", image: "american_eel.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.EPIC },
  { id: 75, name: "bloater", image: "bloater.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 76, name: "brook trout", image: "brook_trout.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 77, name: "brown trout", image: "brown_trout.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "night", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 78, name: "channel catfish", image: "channel_catfish.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 79, name: "chinook salmon", image: "chinook_salmon.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.RARE },
  { id: 80, name: "coho salmon", image: "coho_salmon.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 81, name: "flathead catfish", image: "flathead_catfish.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "night", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.RARE },
  { id: 82, name: "goldfish", image: "goldfish.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.EPIC },
  { id: 83, name: "lake sturgeon", image: "lake_sturgeon.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.EPIC },
  { id: 84, name: "lake trout", image: "lake_trout.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.RARE },
  { id: 85, name: "largemouth bass", image: "largemouth_bass.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 86, name: "longnose gar", image: "longnose_gar.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "night", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.EPIC },
  { id: 87, name: "muskie", image: "muskie.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.RARE },
  { id: 88, name: "pink salmon", image: "pink_salmon.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 89, name: "redear sunfish", image: "redear_sunfish.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 90, name: "round whitefish", image: "round_whitefish.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 91, name: "sea lamprey", image: "sea_lamprey.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 92, name: "smallmouth bass", image: "smallmouth_bass.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "night", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 93, name: "walleye", image: "walleye.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "night", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 94, name: "white bass", image: "white_bass.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 95, name: "white crappie", image: "white_crappie.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 96, name: "yellow perch", image: "yellow_perch.webp", type: TYPES.FISH, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 97, name: "beaver", image: "beaver.webp", type: TYPES.CREATURE, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 98, name: "bullfrog", image: "bullfrog.webp", type: TYPES.CREATURE, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 99, name: "chinese mystery snail", image: "chinese_mystery_snail.webp", type: TYPES.CREATURE, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 100, name: "common musk turtle", image: "common_musk_turtle.webp", type: TYPES.CREATURE, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 101, name: "eastern massasauga rattlesnake", image: "eastern_massasauga_rattlesnake.webp", type: TYPES.CREATURE, location: LOCATIONS.GREAT_LAKES, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 102, name: "North American River Otter", image: "North_American_River_Otter.webp", type: TYPES.CREATURE, location: LOCATIONS.GREAT_LAKES, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 103, name: "quagga mussels", image: "quagga_mussels.webp", type: TYPES.CREATURE, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 104, name: "queen snake", image: "queen_snake.webp", type: TYPES.CREATURE, location: LOCATIONS.GREAT_LAKES, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.RARE },
  { id: 105, name: "zebra mussels", image: "zebra_mussels.webp", type: TYPES.CREATURE, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.COMMON },
  { id: 106, name: "bessie", image: "bessie.webp", type: TYPES.MONSTER, location: LOCATIONS.GREAT_LAKES, time_of_day: "day", unique_feature_type: UNIQUE_FEATURE_TYPES.RARITY, unique_feature_value: RARITIES.LEGENDARY },
  { id: 107, name: "al'capone cap", image: "al'capone_cap.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "a strange hole, perhaps for ventilation." },
  { id: 108, name: "arrow", image: "arrow.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "traditional hunting methods are still strong here." },
  { id: 109, name: "baseball hat", image: "baseball_hat.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "home run!" },
  { id: 110, name: "basketball", image: "basketball.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "looks like someone scored three points." },
  { id: 111, name: "beaver hat", image: "beaver_hat.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "someone's ears get cold" },
  { id: 112, name: "beverage can", image: "beverage_can.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "what kind of person do you have to be to litter?" },
  { id: 113, name: "boom floppy disc", image: "boom_floppy_disc.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "this is some unknown technology" },
  { id: 114, name: "can soup", image: "can_soup.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "it doesn't fit this environment" },
  { id: 115, name: "chip bag", image: "chip_bag.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "plastic, plastic everywhere." },
  { id: 116, name: "cobra sunglasses", image: "cobra_sunglasses.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "classy. this is where the law stops, and fashion start" },
  { id: 117, name: "colorful headdress", image: "colorful_headdress.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "a well-known local exhibit. it needs to be returned" },
  { id: 118, name: "concrete shoe", image: "concrete_shoe.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "strange tastes. why wear such uncomfortable shoes" },
  { id: 119, name: "duct tape", image: "duct_tape.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "this is the foundation of our civilization" },
  { id: 120, name: "fish can", image: "fish_can.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "more fish returned from a long vacation" },
  { id: 121, name: "fridge magnet great lakes", image: "fridge_magnet_great_lakes.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "guardian of receipts and forgotten recipes" },
  { id: 122, name: "glass bottle with xxx sign", image: "glass_bottle_with_xxx_sign.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "i guess it means a great party" },
  { id: 123, name: "green floppy disc", image: "green_floppy_disc.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "someone has lost the save game icon. weird" },
  { id: 124, name: "grey casette", image: "grey_casette.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "this is probably an ancient artifact" },
  { id: 125, name: "hot dog", image: "hot_dog.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "still warm!" },
  { id: 126, name: "meat can", image: "meat_can.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "as you can see the menu is expanding all the time" },
  { id: 127, name: "mouse glove", image: "mouse_glove.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "i wonder if fans of a particular mouse noticed that it was missing a glove" },
  { id: 128, name: "old branch", image: "old_branch.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "beavers would be delighted" },
  { id: 129, name: "old tire", image: "old_tire.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "pretty good tire tread" },
  { id: 130, name: "pipe", image: "pipe.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "but a nice pipe. i wonder what they charged it with." },
  { id: 131, name: "plastic bottle great lakes", image: "plastic_bottle_great_lakes.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "people should clean up after themselves" },
  { id: 132, name: "toxic barrel", image: "toxic_barrel.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "this barrel is shining!" },
  { id: 133, name: "treasure chest great lakes", image: "treasure_chest_great_lakes.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "maybe it can still be opened?" },
  { id: 134, name: "vegetable can", image: "vegetable_can.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "i guess a lot of vegetarians visit these waters" },
  { id: 135, name: "video cassette", image: "video_cassette.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "i wonder if anyone else remembers how it works" },
  { id: 136, name: "vinyl record", image: "vinyl_record.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "what a weird frisbee" },
  { id: 137, name: "wilted leaf", image: "wilted_leaf.webp", type: TYPES.ITEM, location: LOCATIONS.GREAT_LAKES, time_of_day: "any", unique_feature_type: UNIQUE_FEATURE_TYPES.DESCRIPTION, unique_feature_value: "leaf in the water, the eternal cycle of life" }
]
// --- MODULE: Game Logic ---
const game = {
    dailyItem: null,
    itemMap: new Map(),
    guessedItems: new Set(),
    guessesLeft: 6,
    isGameOver: false,
    stats: { gamesPlayed: 0, currentStreak: 0, maxStreak: 0, },
    init() {
        this.dailyItem = this.getDailyItem();
        this.itemMap = new Map(database.map(item => [item.name.toLowerCase(), item]));
        const savedStats = loadData('deepleStats');
        if (savedStats) { this.stats = savedStats; }
    },
    getDailyItem() {
        const today = new Date();
        const seed = today.getFullYear() * 10000 + today.getMonth() * 100 + today.getDate();
        function mulberry32(a) { return function() { let t = a += 0x6D2B79F5; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; } }
        const randomIndex = Math.floor(mulberry32(seed)() * database.length);
        return database[randomIndex];
    },
    checkGuess(guessText) {
        if (this.isGameOver) return;
        if (this.guessedItems.has(guessText)) { return { isValid: false, wasAlreadyGuessed: true }; }
        if (!this.itemMap.has(guessText)) { return { isValid: false, wasAlreadyGuessed: false }; }
        this.guessedItems.add(guessText);
        this.guessesLeft--;
        const guessedItem = this.itemMap.get(guessText);
        const isCorrect = (guessedItem.id === this.dailyItem.id);
        if (isCorrect || this.guessesLeft === 0) {
            this.isGameOver = true;
            this.updateStats(isCorrect);
        }
        let nameLengthHint, nameLengthValue;
        if (guessedItem.name.length === this.dailyItem.name.length) { nameLengthHint = 'correct'; nameLengthValue = guessedItem.name.length; } 
        else if (guessedItem.name.length < this.dailyItem.name.length) { nameLengthHint = 'incorrect'; nameLengthValue = `${guessedItem.name.length} ↑`; } 
        else { nameLengthHint = 'incorrect'; nameLengthValue = `${guessedItem.name.length} ↓`; }
        const hints = {
            guessedItem: guessedItem, isCorrectGuess: isCorrect,
            results: {
                name_length_status: nameLengthHint, name_length_value: nameLengthValue,
                type: guessedItem.type === this.dailyItem.type ? 'correct' : 'incorrect',
                location: guessedItem.location === this.dailyItem.location ? 'correct' : 'incorrect',
                time_of_day: guessedItem.time_of_day === this.dailyItem.time_of_day ? 'correct' : 'incorrect',
                unique_feature_type: guessedItem.unique_feature_type === this.dailyItem.unique_feature_type ? 'correct' : 'incorrect',
                unique_feature_value: guessedItem.unique_feature_value === this.dailyItem.unique_feature_value ? 'correct' : 'incorrect'
            }
        };
        return { isValid: true, isCorrect: isCorrect, isGameOver: this.isGameOver, guessesLeft: this.guessesLeft, hints: hints };
    },
    updateStats(didWin) {
        this.stats.gamesPlayed++;
        if (didWin) {
            this.stats.currentStreak++;
            if (this.stats.currentStreak > this.stats.maxStreak) { this.stats.maxStreak = this.stats.currentStreak; }
        } else { this.stats.currentStreak = 0; }
        saveData('deepleStats', this.stats);
    }
};

const ui = {
    elements: {},
    guessHistory: [],
    init() {
        this.elements = {
            itemImage: document.getElementById("item-image"), imageContainer: document.getElementById("image-container"),
            guessInput: document.getElementById("guess-input"), messageArea: document.getElementById("message-area"),
            guessesContainer: document.getElementById("guesses-container"), featureHeader: document.getElementById("feature-header"),
            suggestionsBox: document.getElementById("suggestions-box"), gameContainer: document.getElementById("game-container"),
            castsIndicatorContainer: document.getElementById("casts-indicator-container"),
        };
        if (Object.values(this.elements).some(el => !el)) {
            console.error("Critical UI Error: One or more HTML elements are missing!");
            document.body.innerHTML = "<h1>Error: Application could not start.</h1>";
            return false;
        }
        for (let i = 0; i < game.guessesLeft; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'cast-indicator';
            this.elements.castsIndicatorContainer.appendChild(indicator);
        }
        this.loadProgress();
        this.updateDynamicHeader();
        this.attachEventListeners();
        return true;
    },
    saveProgress() {
        const dailyState = {
            date: getTodayDateString(), history: this.guessHistory,
            isGameOver: game.isGameOver, guessesLeft: game.guessesLeft,
            guessedItems: Array.from(game.guessedItems)
        };
        saveData('deepleDailyState', dailyState);
    },
    loadProgress() {
        const savedState = loadData('deepleDailyState');
        if (savedState && savedState.date === getTodayDateString()) {
            this.guessHistory = savedState.history;
            game.isGameOver = savedState.isGameOver;
            game.guessesLeft = savedState.guessesLeft;
            game.guessedItems = new Set(savedState.guessedItems);
            this.redrawUI();
        }
    },
    redrawUI() {
        const guessesParent = this.elements.guessesContainer;
        const header = guessesParent.querySelector('.header');
        guessesParent.innerHTML = ''; 
        if (header) guessesParent.appendChild(header); 
        this.guessHistory.forEach(guess => {
            const entryDiv = this.createGuessRow(guess);
            guessesParent.appendChild(entryDiv);
        });
        this.elements.castsIndicatorContainer.innerHTML = '';
        for (let i = 0; i < game.guessesLeft; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'cast-indicator';
            this.elements.castsIndicatorContainer.appendChild(indicator);
        }
        if (game.isGameOver) {
            this.elements.guessInput.disabled = true;
            this.elements.imageContainer.classList.remove('hidden');
            const lastGuess = this.guessHistory[this.guessHistory.length - 1];
            if (lastGuess.isCorrectGuess) {
                this.elements.messageArea.textContent = `Correct! It was: ${game.dailyItem.name}`;
                this.elements.messageArea.classList.add("message-success");
                const dailyItemBaseName = game.dailyItem.image.replace('.webp', '');
                this.elements.imageContainer.innerHTML = `<div class="win-display"><h3>Congratulations!</h3><img src="images/${dailyItemBaseName}-150.webp" alt="${game.dailyItem.name}"><p>It was: <strong>${game.dailyItem.name}</strong></p></div>`;
            } else {
                this.elements.messageArea.textContent = `Game Over! The correct item was: ${game.dailyItem.name}`;
                this.elements.messageArea.classList.add("message-error");
                this.elements.itemImage.src = `images/${game.dailyItem.image.replace('.webp', '-150.webp')}`;
                this.elements.itemImage.alt = game.dailyItem.name;
            }
        }
    },
    createGuessRow(guess) {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("guess-entry");
        if(guess.isCorrectGuess) { entryDiv.classList.add("winner"); }
        const guessed = guess.guessedItem;
        const results = guess.results;
        const baseImageName = guessed.image.replace('.webp', '');
        let featureValueText = '';
        if (guessed.unique_feature_type === UNIQUE_FEATURE_TYPES.RARITY) { featureValueText = guessed.unique_feature_value; } 
        else if (guessed.unique_feature_type === UNIQUE_FEATURE_TYPES.DESCRIPTION) { featureValueText = guessed.unique_feature_value; }
        const nameStatusClass = guess.isCorrectGuess ? 'status-name-correct' : 'status-name-incorrect';
        entryDiv.innerHTML = `<div class="guess-cell ${nameStatusClass} guess-cell-with-image"><picture><source type="image/webp" srcset="images/${baseImageName}-150.webp 150w, images/${baseImageName}-300.webp 300w" sizes="(max-width: 768px) 70px, 90px"><img class="guess-image" src="images/${baseImageName}-150.png" alt="${guessed.name}" width="90" height="90" loading="lazy"></picture><span>${guessed.name}</span></div><div class="guess-cell status-${results.location}">${guessed.location.replace('_', ' ')}</div><div class="guess-cell status-${results.type}">${guessed.type}</div><div class="guess-cell status-${results.time_of_day}">${guessed.time_of_day}</div><div class="guess-cell status-${results.name_length_status}">${results.name_length_value}</div><div class="guess-cell status-${results.unique_feature_value}">${featureValueText}</div>`;
        return entryDiv;
    },
    updateDynamicHeader() {
        if (game.dailyItem.unique_feature_type === UNIQUE_FEATURE_TYPES.RARITY) { this.elements.featureHeader.textContent = "Rarity/Description"; } 
        else { this.elements.featureHeader.textContent = "Rarity/Description"; }
    },
    attachEventListeners() {
        this.elements.guessInput.addEventListener("input", () => {
            const inputText = this.elements.guessInput.value.trim().toLowerCase();
            if (inputText.length < 2) { this.renderSuggestions([]); return; }
            const matches = database.filter(item => 
                item.name.toLowerCase().includes(inputText) && !game.guessedItems.has(item.name.toLowerCase())
            ).slice(0, 5); 
            this.renderSuggestions(matches);
        });
        document.addEventListener('click', (event) => {
            if (!this.elements.gameContainer.contains(event.target)) { this.renderSuggestions([]); }
        });
    },
    renderSuggestions(matches) {
        this.elements.suggestionsBox.innerHTML = ""; 
        matches.forEach(item => {
            const suggestionEl = document.createElement("div");
            suggestionEl.className = "suggestion-item";
            const baseImageName = item.image.replace('.webp', '');
            suggestionEl.innerHTML = `<img src="images/${baseImageName}-150.webp" alt="${item.name}" class="suggestion-image"><span class="suggestion-name">${item.name}</span>`;
            suggestionEl.addEventListener("click", () => {
                this.elements.guessInput.value = item.name;
                this.handleUserGuess();
            });
            this.elements.suggestionsBox.appendChild(suggestionEl);
        });
    },
    handleUserGuess() {
        const guessText = this.elements.guessInput.value.trim().toLowerCase();
        if (guessText === "") return;
        this.elements.suggestionsBox.innerHTML = "";
        const result = game.checkGuess(guessText);
        this.render(result);
        this.elements.guessInput.value = "";
        this.elements.guessInput.focus();
    },
    render(result) {
        this.elements.messageArea.textContent = "";
        this.elements.messageArea.className = "";
        if (result.wasAlreadyGuessed) { this.elements.messageArea.textContent = "You have already guessed this item."; this.elements.messageArea.classList.add("message-error"); return; }
        if (!result.isValid) { this.elements.messageArea.textContent = "This item doesn't exist in the database."; this.elements.messageArea.classList.add("message-error"); return; }
        this.guessHistory.push(result.hints);
        this.saveProgress();
        const container = this.elements.castsIndicatorContainer;
        if (container.lastChild) { container.removeChild(container.lastChild); }
        const guessesParent = this.elements.guessesContainer;
        const newGuessRow = this.createGuessRow(result.hints);
        guessesParent.appendChild(newGuessRow);
        if (result.isGameOver) {
            this.elements.imageContainer.classList.remove('hidden');
            if (result.isCorrect) {
                this.elements.messageArea.textContent = `Correct! It was: ${game.dailyItem.name}`;
                this.elements.messageArea.classList.add("message-success");
                const dailyItemBaseName = game.dailyItem.image.replace('.webp', '');
                this.elements.imageContainer.innerHTML = `<div class="win-display"><h3>Congratulations!</h3><img src="images/${dailyItemBaseName}-150.webp" alt="${game.dailyItem.name}"><p>It was: <strong>${game.dailyItem.name}</strong></p></div>`;
            } else {
                this.elements.messageArea.textContent = `Game Over! The correct item was: ${game.dailyItem.name}`;
                this.elements.messageArea.classList.add("message-error");
                this.elements.itemImage.src = `images/${game.dailyItem.image.replace('.webp', '-150.webp')}`;
                this.elements.itemImage.alt = game.dailyItem.name;
            }
            this.elements.guessInput.disabled = true;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    game.init();
    if (ui.init()) {
        console.log("Today's item to guess is:", game.dailyItem);
    }
});