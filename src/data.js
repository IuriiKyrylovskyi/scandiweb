const planes = [
  {
    id: 'a380',
    img: 'https://imgproc.airliners.net/photos/airliners/9/8/1/0957189-v40-15.jpg',
    name: 'airbus A380-841',
    airline: 'Singapore Airlines',
    quote:
      "The Airbus A380 is a wide-body aircraft manufactured by Airbus. It is the world's largest passenger airliner. Airbus studies started in 1988 and the project was announced in 1990 to challenge the dominance of the Boeing 747 in the long haul market. The then-designated A3XX project was presented in 1994; Airbus launched the €9.5 billion ($10.7 billion) A380 programme on 19 December 2000. The first prototype was unveiled in Toulouse on 18 January 2005, with its first flight on 27 April 2005. Difficulties in electrical wiring caused a two-year delay and the development cost ballooned to €18 billion. It obtained its type certificate from the European Aviation Safety Agency (EASA) and the US Federal Aviation Administration (FAA) on 12 December 2006.",
  },
  {
    id: 'b747',
    img: 'https://imgproc.airliners.net/photos/airliners/4/7/7/1078774.jpg?v=v40',
    name: 'Boeing 747-406',
    airline: 'KLM - Royal Dutch Airlines',
    quote:
      'The Boeing 747 is a large, long-range wide-body airliner and cargo aircraft manufactured by Boeing Commercial Airplanes in the United States. After introducing the 707 in October 1958, Pan Am wanted a jet 2+1⁄2 times its size, to reduce its seat cost by 30% to democratize air travel.[7] In 1965, Joe Sutter left the 737 development program to design the 747, the first twin aisle airliner. In April 1966, Pan Am ordered 25 Boeing 747-100 aircraft and in late 1966, Pratt & Whitney agreed to develop its JT9D engine, a high-bypass turbofan. On September 30, 1968, the first 747 was rolled out of the custom-built Everett Plant, the world\'s largest building by volume. The first flight took place on February 9, 1969, and the 747 was certified in December of that year. It entered service with Pan Am on January 22, 1970; it was the first airplane dubbed a "Jumbo Jet".',
  },
  {
    id: 'concorde',
    img: 'https://imgproc.airliners.net/photos/airliners/6/8/8/0441886-v40-15.jpg',
    name: 'Aerospatiale-BAC Concorde 102',
    airline: 'British Airways',
    quote:
      'The Aérospatiale/BAC Concorde (/ˈkɒŋkɔːrd/) is a British–French turbojet-powered supersonic passenger airliner that was operated from 1976 until 2003. It had a maximum speed over twice the speed of sound, at Mach 2.04 (1,354 mph or 2,180 km/h at cruise altitude), with seating for 92 to 128 passengers. First flown in 1969, Concorde entered service in 1976 and operated for 27 years. It is one of only two supersonic transports to have been operated commercially; the other is the Soviet-built Tupolev Tu-144, which operated in the late 1970s',
  },
  {
    id: 'b787',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Boeing_787_N1015B_ANA_Airlines_%2827611880663%29_%28cropped%29.jpg/450px-Boeing_787_N1015B_ANA_Airlines_%2827611880663%29_%28cropped%29.jpg',
    name: 'Boeing 787 Dreamliner',
    airline: 'All Nippon Airways',
    quote:
      'The Boeing 787 Dreamliner is an American wide-body jet airliner manufactured by Boeing Commercial Airplanes. After dropping its Sonic Cruiser project, Boeing announced the conventional 7E7 on January 29, 2003, focused on efficiency. The program was launched on April 26, 2004, with an order for 50 from All Nippon Airways (ANA), targeting a 2008 introduction. On July 8, 2007, the prototype was rolled out without major systems, and experienced multiple delays until its maiden flight on December 15, 2009. Type certification was received in August 2011 and the first 787-8 was delivered in September 2011 before entering commercial service on October 26, 2011, with ANA.',
  },
  {
    id: 'a340',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Airbus_A340-311%2C_Lufthansa_AN1936774.jpg/450px-Airbus_A340-311%2C_Lufthansa_AN1936774.jpg',
    name: 'Airbus A340',
    airline: 'Lufthansa',
    quote:
      'The Airbus A340 is a long-range, wide-body passenger jet airliner that was developed and produced by the European aerospace company Airbus. In the mid-1970s, Airbus conceived several derivatives of the A300, its first airliner, and developed the A340 quadjet in parallel with the A330 twinjet. In June 1987, Airbus launched both designs with their first orders and the A340-300 took its maiden flight on 25 October 1991. It was certified along with the A340-200 on 22 December 1992 and both versions entered service in March 1993 with launch customers Lufthansa and Air France. The larger A340-500/600 were launched on 8 December 1997, the A340-600 flew for the first time on 23 April 2001 and entered service on 1 August 2002.',
  },
  {
    id: 'mriya',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Antonov_An-225_Beltyukov-1.jpg/450px-Antonov_An-225_Beltyukov-1.jpg',
    name: 'Antonov An-225 Mriya',
    airline: 'Antonov Design Bureau',
    quote:
      'The Antonov An-225 Mriya (Ukrainian: Антонов Ан-225 Мрія, lit. "dream" or "inspiration"; NATO reporting name: Cossack) is a strategic airlift cargo aircraft that was designed by the Antonov Design Bureau in the Ukrainian SSR within the Soviet Union during the 1980s. It is powered by six turbofan engines and is the heaviest aircraft ever built, with a maximum takeoff weight of 640 tonnes (710 short tons; 630 long tons). It also has the largest wingspan of any aircraft in operational service. The single example built has the Ukrainian civil registration UR-82060. A second airframe with a slightly different configuration[1] was partially built. Its construction was halted in 1994[1] because of lack of funding and interest, but revived briefly in 2009, bringing it to 60–70% completion.[2] On 30 August 2016, Antonov agreed to complete the second airframe for Airspace Industry Corporation of China (not to be confused with the Aviation Industry Corporation of China) as a prelude to commencing series production',
  },
  {
    id: 'b777',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Cathay_Pacific_Boeing_777-200%3B_B-HNL%40HKG.jpg/450px-Cathay_Pacific_Boeing_777-200%3B_B-HNL%40HKG.jpg',
    name: 'Boeing 777',
    airline: ' Cathay Pacific',
    quote:
      "The Boeing 777, commonly referred to as the Triple Seven, is an American wide-body airliner developed and manufactured by Boeing Commercial Airplanes. It is the world's largest twinjet. The 777 was designed to bridge the gap between Boeing's 767 and 747, and to replace older DC-10s and L-1011s. Developed in consultation with eight major airlines, with a first meeting in January 1990, the program was launched on October 14, 1990, with an order from United Airlines. The prototype was rolled out on April 9, 1994, and first flew on June 12, 1994. The 777 entered service with the launch customer, United Airlines, on June 7, 1995. Longer range variants were launched on February 29, 2000, and were first delivered on April 29, 2004",
  },
  {
    id: 'a350',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Qatar_Airways_A350-941_%28A7-ALA%29_landing_at_Frankfurt_Airport.jpg/450px-Qatar_Airways_A350-941_%28A7-ALA%29_landing_at_Frankfurt_Airport.jpg',
    name: 'Airbus A350',
    airline: 'Qatar Airways',
    quote:
      'The Airbus A350 is a long-range, wide-body jet airliner developed by Airbus. The first A350 design proposed by Airbus in 2004, in response to the Boeing 787 Dreamliner, would have been a development of the A330 with composite wings and new engines. As market support was inadequate, in 2006, Airbus switched to a clean-sheet "XWB" (eXtra Wide Body) design, powered by Rolls-Royce Trent XWB turbofan engines. The prototype first flew on 14 June 2013 from Toulouse in France. Type certification from the European Aviation Safety Agency (EASA) was obtained in September 2014, followed by certification from the Federal Aviation Administration (FAA) two months later.',
  },
  {
    id: 'beluga',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/AirExpo_2014_-_Beluga_02_%28cropped%29.jpg/450px-AirExpo_2014_-_Beluga_02_%28cropped%29.jpg',
    name: 'Airbus A300-600ST (Super Transporter) or Beluga',
    airline: 'Airbus Transport International',
    quote:
      'The Airbus A300-600ST (Super Transporter), or Beluga, is a version of the standard A300-600 wide-body airliner modified to carry aircraft parts and outsize cargo. It received the official name of Super Transporter early on; however, the name Beluga, a whale it resembles,[1][2] gained popularity and has since been officially adopted. The Beluga XL, based on the Airbus A330 with similar modifications and dimensions, was developed by Airbus to replace the type in January 2020.',
  },
  {
    id: 'a330',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/B-16331_EVA_Airways_Airbus_A330-302X_Hello_Kitty_With_Magic_Stars_Livery_SHA_%2814017424401%29.jpg/1200px-B-16331_EVA_Airways_Airbus_A330-302X_Hello_Kitty_With_Magic_Stars_Livery_SHA_%2814017424401%29.jpg',
    name: 'Airbus A330',
    airline: 'EVA airwais',
    quote:
      'The Airbus A330 is a wide-body aircraft designed and produced by Airbus. Airbus conceived several derivatives of the A300, its first airliner in the mid-1970s. Then the company began development on the A330 twinjet in parallel with the A340 quadjet and launched both designs with their first orders in June 1987. The A330-300, the first variant, took its maiden flight in November 1992 and entered service with Air Inter in January 1994. The slightly shorter A330-200 variant followed in 1998.',
  },
  {
    id: 'a320',
    img: 'https://focusonbelgium.be/sites/default/files/styles/big_article_image/public/shutterstock_1655749387_tomorrowland_airplane_1.jpg?itok=N8g3Nhmk',
    name: 'Airbus A320',
    airline: 'Brussels Airlines',
    quote:
      "The Airbus A320, called 'Amare', was created for travellers to the festival, and is decorated in an electronica style inherited from the festival’s music. Inside, the aircraft features mood lighting, and passengers are welcomed by the Tomorrowland hymn. Music will be played during the entire flight so that passengers can begin festivities while aboard the aircraft.",
  },
  {
    id: 'b737',
    img: 'https://i.pinimg.com/236x/82/4d/d7/824dd7e1462a588900e8a79c3bde30a8--cargo-aircraft-airplanes.jpg',
    name: 'Boeing 737',
    airline: 'Kuban Airlines',
    quote:
      'The Boeing 737 is a narrow-body aircraft produced by Boeing at its Renton Factory in Washington. Developed to supplement the Boeing 727 on short and thin routes, the twinjet retains the 707 fuselage cross-section and nose with two underwing turbofans. Envisioned in 1964, the initial 737-100 made its first flight in April 1967 and entered service in February 1968 with Lufthansa. The lengthened 737-200 entered service in April 1968. It evolved through four generations, offering several variants for 85 to 215 passengers.',
  },
];

export default data;
