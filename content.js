const bookData = [
    {
        title: "১. Alphabet (বর্ণমালা)",
        content: `
            <h2>Alphabet বা বর্ণমালা কাকে বলে?</h2>
            <p>ইংরেজিতে A থেকে Z পর্যন্ত মোট ২৬টি বর্ণ আছে। এই সবগুলোকে একসাথে Alphabet বা বর্ণমালা বলে।</p>
            
            

[Image of alphabet_chart]


            <div class="rule-box">
                <strong>📝 দুই ধরণের বর্ণ আছে:</strong>
                <ul>
                    <li><strong>Vowel (স্বরবর্ণ):</strong> A, E, I, O, U (মোট ৫টি)</li>
                    <li><strong>Consonant (ব্যঞ্জনবর্ণ):</strong> বাকি ২১টি (B, C, D...)</li>
                </ul>
            </div>
            
            <p><strong>Example:</strong><br>
            Apple (অ্যাপল) - এখানে 'A' এবং 'e' হলো Vowel.</p>
        `
    },
    {
        title: "২. Word (শব্দ)",
        content: `
            <h2>Word বা শব্দ কী?</h2>
            <p>কতগুলো Letter বা বর্ণ পাশাপাশি বসে যদি কোনো অর্থ প্রকাশ করে, তবে তাকে Word বলে।</p>
            
            <div class="example-box">
                <p><strong>সঠিক:</strong> Pen (কলম) -> এটি একটি Word.</p>
                <p><strong>ভুল:</strong> Epn -> এর কোনো অর্থ নেই, তাই এটি Word নয়।</p>
            </div>
            
            
        `
    },
    {
        title: "৩. Sentence (বাক্য)",
        content: `
            <h2>Sentence বা বাক্য</h2>
            <p>কতগুলো শব্দ পাশাপাশি বসে মনের ভাব প্রকাশ করলে তাকে Sentence বলে।</p>
            
            <div class="rule-box">
                <p>গঠন: <strong>Subject + Verb + Object</strong></p>
            </div>
            
            <div class="example-box">
                <p>🇺🇸 I eat rice.<br>🇧🇩 আমি ভাত খাই।</p>
                <p>🇺🇸 She plays football.<br>🇧🇩 সে ফুটবল খেলে।</p>
            </div>
        `
    },
    {
        title: "৪. Parts of Speech (পদ প্রকরণ)",
        content: `
            <h2>Parts of Speech পরিচিতি</h2>
            <p>Sentence এ ব্যবহৃত প্রতিটি শব্দকে এক একটি Parts of Speech বলে। এটি ৮ প্রকার।</p>
            
            

[Image of parts_of_speech_tree]


            <ul>
                <li>1. Noun (বিশেষ্য)</li>
                <li>2. Pronoun (সর্বনাম)</li>
                <li>3. Adjective (নাম বিশেষণ)</li>
                <li>4. Verb (ক্রিয়া)</li>
                <li>5. Adverb (ক্রিয়া বিশেষণ)</li>
                <li>6. Preposition (পদান্বয়ী অব্যয়)</li>
                <li>7. Conjunction (সংযোজক অব্যয়)</li>
                <li>8. Interjection (আবেগসূচক অব্যয়)</li>
            </ul>
        `
    },
    {
        title: "৫. Noun (বিশেষ্য)",
        content: `
            <h2>Noun কাকে বলে?</h2>
            <p>কোনো কিছুর নামকেই Noun বলে। সেটা হতে পারে ব্যক্তির নাম, জায়গার নাম বা বস্তুর নাম।</p>
            
            <div class="example-box">
                <ul>
                    <li><strong>নাম:</strong> Rahim, Karim</li>
                    <li><strong>জায়গা:</strong> Dhaka, London</li>
                    <li><strong>বস্তু:</strong> Chair, Table, Pen</li>
                </ul>
            </div>
            
        `
    },
    {
        title: "৬. Pronoun (সর্বনাম)",
        content: `
            <h2>Pronoun বা সর্বনাম</h2>
            <p>Noun এর পরিবর্তে যে শব্দ বসে তাকে Pronoun বলে।</p>
            
            <div class="example-box">
                <p>Rahim is a good boy. <strong>He</strong> goes to school.</p>
                <p>এখানে 'Rahim' এর বদলে 'He' বসেছে। তাই He হলো Pronoun.</p>
            </div>
            
            <p><strong>Common Pronouns:</strong> I, We, You, He, She, They, It.</p>
        `
    },
    {
        title: "৭. Adjective (দোষ-গুণ)",
        content: `
            <h2>Adjective কাকে বলে?</h2>
            <p>যে শব্দ দিয়ে Noun বা Pronoun এর দোষ, গুণ, অবস্থা, সংখ্যা বা পরিমাণ বোঝায়।</p>
            
            <div class="example-box">
                <ul>
                    <li>Good (ভালো) - He is a <strong>good</strong> boy.</li>
                    <li>Red (লাল) - It is a <strong>red</strong> flower.</li>
                    <li>Fat (মোটা) - The cat is <strong>fat</strong>.</li>
                </ul>
            </div>
        `
    },
    {
        title: "৮. Verb (ক্রিয়া)",
        content: `
            <h2>Verb বা কাজ</h2>
            <p>যে শব্দ দিয়ে কোনো কাজ করা বোঝায় তাকে Verb বলে। ইংলিশ গ্রামারে Verb কে বাক্যের প্রাণ বলা হয়।</p>
            
            <div class="example-box">
                <ul>
                    <li>Play (খেলা করা)</li>
                    <li>Eat (খাওয়া)</li>
                    <li>Read (পড়া)</li>
                    <li>Sleep ( ঘুমানো)</li>
                </ul>
            </div>
            

[Image of action_verbs]

        `
    },
    {
        title: "৯. Adverb (ক্রিয়া বিশেষণ)",
        content: `
            <h2>Adverb কী?</h2>
            <p>যে শব্দ Verb কে মডিফাই করে, অর্থাৎ কাজটি 'কেমনভাবে' বা 'কখন' হচ্ছে তা বলে দেয়।</p>
            
            <div class="example-box">
                <p>He runs <strong>slowly</strong>. (সে ধীরে দৌড়ায়)</p>
                <p>She sings <strong>sweetly</strong>. (সে মিষ্টি করে গায়)</p>
            </div>
            <p>টিপস: বেশিরভাগ Adverb এর শেষে 'ly' থাকে।</p>
        `
    },
    {
        title: "১০. Preposition",
        content: `
            <h2>Preposition (অবস্থান)</h2>
            <p>Pre অর্থ পূর্বে, Position অর্থ অবস্থান। যে শব্দ Noun বা Pronoun এর আগে বসে তার অবস্থান নির্দেশ করে।</p>
            
            

            <div class="example-box">
                <ul>
                    <li><strong>On:</strong> উপরে (ছুঁয়ে থাকলে) - The pen is <strong>on</strong> the table.</li>
                    <li><strong>In:</strong> ভেতরে - The fish is <strong>in</strong> the water.</li>
                    <li><strong>Under:</strong> নিচে - The cat is <strong>under</strong> the chair.</li>
                </ul>
            </div>
        `
    },
    {
        title: "১১. Number (বচন)",
        content: `
            <h2>Number বা বচন</h2>
            <p>যা দিয়ে কোনো কিছুর সংখ্যা বোঝায়। এটি দুই প্রকার:</p>
            
            <table border="1">
                <tr>
                    <th>Singular (একবচন)</th>
                    <th>Plural (বহুবচন)</th>
                </tr>
                <tr>
                    <td>Cat (একটি বিড়াল)</td>
                    <td>Cats (অনেক বিড়াল)</td>
                </tr>
                <tr>
                    <td>Box</td>
                    <td>Boxes</td>
                </tr>
                <tr>
                    <td>Man</td>
                    <td>Men (ব্যতিক্রম)</td>
                </tr>
            </table>
        `
    },
    {
        title: "১২. Gender (লিঙ্গ)",
        content: `
            <h2>Gender বা লিঙ্গ</h2>
            <ul>
                <li><strong>Masculine (পুরুষ):</strong> Father, Brother, King.</li>
                <li><strong>Feminine (নারী):</strong> Mother, Sister, Queen.</li>
                <li><strong>Common (উভয়):</strong> Baby, Student, Friend.</li>
                <li><strong>Neuter (ক্লীব):</strong> Chair, Table, Book.</li>
            </ul>
        `
    },
    {
        title: "১৩. Person (পুরুষ)",
        content: `
            <h2>Person তিন প্রকার</h2>
            <div class="rule-box">
                <ol>
                    <li><strong>1st Person (আমি/আমরা):</strong> I, We.</li>
                    <li><strong>2nd Person (তুমি/তোমরা):</strong> You.</li>
                    <li><strong>3rd Person (বাকি সব):</strong> He, She, They, Rahim, Karim.</li>
                </ol>
            </div>
            <p class="note-box">Note: Present Indefinite Tense এ Subject যদি 3rd Person Singular হয়, তবে Verb এর সাথে s/es যুক্ত হয়।</p>
        `
    },
    {
        title: "১৪. Articles (A, An, The)",
        content: `
            <h2>Article ব্যবহারের নিয়ম</h2>
            
            <h3>A এবং An:</h3>
            <ul>
                <li>শব্দ Consonant দিয়ে শুরু হলে <strong>A</strong> বসে। (A cat, A dog)</li>
                <li>শব্দ Vowel (a,e,i,o,u) দিয়ে শুরু হলে <strong>An</strong> বসে। (An apple, An egg)</li>
            </ul>

            <h3>The:</h3>
            <p>নির্দিষ্ট করে কিছু বোঝালে বা পৃথিবীতে যা একটিই আছে তার আগে The বসে। (The sun, The Padma).</p>
        `
    },
    {
        title: "১৫. Tense (কাল) - পরিচিতি",
        content: `
            <h2>Tense বা কাল</h2>
            <p>ক্রিয়া সম্পন্ন হওয়ার সময়কে Tense বলে। এটি প্রধানত ৩ প্রকার:</p>
            <ol>
                <li><strong>Present Tense:</strong> বর্তমান কাল (আমি খাই)।</li>
                <li><strong>Past Tense:</strong> অতীত কাল (আমি খেয়েছিলাম)।</li>
                <li><strong>Future Tense:</strong> ভবিষ্যৎ কাল (আমি খাব)।</li>
            </ol>
            
        `
    },
    {
        title: "১৬. Present Tense (বর্তমান কাল)",
        content: `
            <h2>Present Indefinite Tense</h2>
            <p>বর্তমানে কোনো কাজ হয় বা অভ্যাসগত সত্য বোঝালে।</p>
            <div class="rule-box">Structure: Subject + Verb(present form) + Object</div>
            <p>Example: I go to school. (আমি স্কুলে যাই)</p>
            
            <h2>Present Continuous Tense</h2>
            <p>বর্তমানে কোনো কাজ চলছে।</p>
            <div class="rule-box">Structure: Sub + am/is/are + Verb(ing) + Object</div>
            <p>Example: I am eating rice. (আমি ভাত খাচ্ছি)</p>
        `
    },
    {
        title: "১৭. Past Tense (অতীত কাল)",
        content: `
            <h2>Past Indefinite Tense</h2>
            <p>অতীতে কোনো কাজ হয়েছিল।</p>
            <div class="rule-box">Structure: Sub + Verb(past form) + Object</div>
            <p>Example: I <strong>ate</strong> rice. (আমি ভাত খেয়েছিলাম)</p>
        `
    },
    {
        title: "১৮. Future Tense (ভবিষ্যৎ কাল)",
        content: `
            <h2>Future Indefinite Tense</h2>
            <p>ভবিষ্যতে কোনো কাজ হবে।</p>
            <div class="rule-box">Structure: Sub + shall/will + Verb(base form) + Object</div>
            <p>Example: I <strong>will go</strong> to Dhaka. (আমি ঢাকা যাব)</p>
        `
    },
    {
        title: "১৯. Punctuation (বিরাম চিহ্ন)",
        content: `
            <h2>বিরাম চিহ্নের ব্যবহার</h2>
            <ul>
                <li><strong>Full Stop (.):</strong> বাক্য শেষ হলে। (He is good.)</li>
                <li><strong>Comma (,):</strong> অল্প থামতে হলে। (Pen, pencil, and book.)</li>
                <li><strong>Question Mark (?):</strong> প্রশ্ন করলে। (What is your name?)</li>
                <li><strong>Exclamation Mark (!):</strong> আবেগ প্রকাশে। (Wow! What a bird!)</li>
            </ul>
        `
    },
    {
        title: "২০. লেখক পরিচিতি",
        content: `
            <h2>ধন্যবাদান্তে</h2>
            <div style="text-align:center;">
                

[Image of author]

                <h3>মঞ্জুরুল হক</h3>
                <p>প্রভাষক, অর্থনীতি</p>
                <hr>
                <p>📞 মোবাইল: ০১৭১৫২৪৭৫৮৮</p>
                <p>💬 WhatsApp: 01715247588</p>
                <p>📧 মেইল: monjurul.jusc@gmail.com</p>
                <p>🌐 <a href="https://www.facebook.com/himel.hemu" target="_blank">ফেসবুক প্রোফাইল</a></p>
            </div>
            
            <p style="text-align:center; margin-top:30px;">
                এই অ্যাপটি ভালো লাগলে বন্ধুদের সাথে শেয়ার করুন!
            </p>
        `
    },

    
    {
        title: "১. Tense বা কাল পরিচিতি",
        content: `
            <h2>Tense কী এবং কেন শিখব?</h2>
            <p>Tense শব্দের অর্থ হলো 'কাল' বা 'সময়'। ইংরেজি বাক্যে কোনো কাজ কখন হচ্ছে (এখন, আগে নাকি পরে) তা বোঝাতে Verb-এর যে পরিবর্তন হয়, তাকে Tense বলে।</p>
            
            <p>সহজ কথায়: <strong>Tense = Time of Action.</strong></p>
            
            

            <div class="rule-box">
                <h3>প্রধান ৩ প্রকার Tense:</h3>
                <ul>
                    <li><strong>1. Present Tense:</strong> বর্তমান কাল (আমি করি)।</li>
                    <li><strong>2. Past Tense:</strong> অতীত কাল (আমি করেছিলাম)।</li>
                    <li><strong>3. Future Tense:</strong> ভবিষ্যৎ কাল (আমি করব)।</li>
                </ul>
            </div>
            <p>ইংরেজি ভাষায় কথা বলতে বা লিখতে গেলে Tense হলো মেরুদণ্ডের মতো। এটি ছাড়া বাক্য গঠন অসম্ভব।</p>
        `
    },
    {
        title: "২. Tense এর প্রকারভেদ (Chart)",
        content: `
            <h2>এক নজরে ১২ প্রকার Tense</h2>
            <p>প্রতিটি প্রধান Tense-কে আবার ৪ ভাগে ভাগ করা হয়েছে। অর্থাৎ মোট ৩ x ৪ = ১২টি Tense.</p>

            <table border="1">
                <tr>
                    <th>Type</th>
                    <th>Present</th>
                    <th>Past</th>
                    <th>Future</th>
                </tr>
                <tr>
                    <td><strong>Indefinite</strong><br>(সাধারণ)</td>
                    <td>করি</td>
                    <td>করেছিলাম</td>
                    <td>করব</td>
                </tr>
                <tr>
                    <td><strong>Continuous</strong><br>(চলমান)</td>
                    <td>করছি</td>
                    <td>করছিলাম</td>
                    <td>করতে থাকব</td>
                </tr>
                <tr>
                    <td><strong>Perfect</strong><br>(পুরাঘটিত)</td>
                    <td>করেছি</td>
                    <td>করেছিলাম (আগে)</td>
                    <td>করে থাকব</td>
                </tr>
                <tr>
                    <td><strong>Perfect Cont.</strong><br>(সময়ের উল্লেখসহ চলমান)</td>
                    <td>সকাল থেকে করছি</td>
                    <td>সকাল থেকে করছিলাম</td>
                    <td>সকাল থেকে করতে থাকব</td>
                </tr>
            </table>
            
            
        `
    },
    {
        title: "৩. Present Indefinite Tense (বিস্তারিত)",
        content: `
            <h2>Present Indefinite Tense</h2>
            <p>বর্তমানে কোনো কাজ হয়, অভ্যাসগত সত্য বা চিরন্তন সত্য বোঝালে এই Tense হয়।</p>
            
            <div class="rule-box">
                <strong>গঠন (Structure):</strong><br>
                Subject + Verb (Present Form) + Object
            </div>

            <h3>Examples:</h3>
            <ul>
                <li>আমি ভাত খাই - I eat rice.</li>
                <li>সে স্কুলে যায় - He goes to school.</li>
                <li>সূর্য পূর্ব দিকে ওঠে - The sun rises in the east.</li>
            </ul>

            <div class="note-box">
                <strong>⚠️ জরুরি নিয়ম:</strong><br>
                Subject যদি 3rd Person Singular (He, She, It, Rahim) হয়, তবে Verb এর শেষে 's' বা 'es' যোগ করতে হয়।
                <br>যেমন: He <strong>eats</strong> rice.
            </div>
            
            

[Image of present_indefinite]

        `
    },
    {
        title: "৪. Present Continuous Tense",
        content: `
            <h2>Present Continuous Tense</h2>
            <p>বর্তমানে কোনো কাজ চলছে বা হচ্ছে বোঝালে। (বাংলায় ক্রিয়ার শেষে: চ্ছ, চ্ছি, চ্ছে থাকে)</p>

            <div class="rule-box">
                <strong>গঠন:</strong><br>
                Sub + am / is / are + Verb(ing) + Object
            </div>

            <h3>ব্যবহারবিধি:</h3>
            <ul>
                <li><strong>I am:</strong> I am playing.</li>
                <li><strong>He/She is:</strong> He is reading.</li>
                <li><strong>You/We/They are:</strong> They are running.</li>
            </ul>

            <div class="example-box">
                <p>আমি এখন লিখছি - I am writing now.</p>
                <p>মা রান্না করছে - Mother is cooking.</p>
            </div>
        `
    },
    {
        title: "৫. Present Perfect Tense",
        content: `
            <h2>Present Perfect Tense</h2>
            <p>কোনো কাজ এইমাত্র শেষ হয়েছে, কিন্তু তার ফল এখনো বর্তমান আছে। (বাংলায়: ছি, ছ, ছে, ছেন)</p>

            <div class="rule-box">
                <strong>গঠন:</strong><br>
                Sub + have / has + Verb(Past Participle/V3) + Object
            </div>

            <h3>Examples:</h3>
            <ul>
                <li>আমি ভাত খেয়েছি - I <strong>have eaten</strong> rice.</li>
                <li>সে গ্লাসটি ভেঙেছে - He <strong>has broken</strong> the glass.</li>
            </ul>

            <div class="note-box">
                <strong>মনে রাখবেন:</strong> Just, just now, already, yet, ever, lately থাকলে এই Tense হয়।
            </div>
        `
    },
    {
        title: "৬. Present Perfect Continuous",
        content: `
            <h2>Present Perfect Continuous Tense</h2>
            <p>কোনো কাজ পূর্বে শুরু হয়ে বর্তমানেও চলছে এবং সময়ের উল্লেখ আছে।</p>

            <div class="rule-box">
                <strong>গঠন:</strong><br>
                Sub + have been / has been + Verb(ing) + Since/For + Time
            </div>

            <h3>Since vs For:</h3>
            <ul>
                <li><strong>Since:</strong> নির্দিষ্ট সময় (Point of time) - Since morning, Since Sunday.</li>
                <li><strong>For:</strong> সময়ের ব্যাপ্তি (Period of time) - For 2 hours, For 5 days.</li>
            </ul>

            <div class="example-box">
                <p>সকাল থেকে বৃষ্টি হচ্ছে - It has been raining <strong>since</strong> morning.</p>
                <p>সে দুই ঘণ্টা ধরে পড়ছে - He has been reading <strong>for</strong> 2 hours.</p>
            </div>
            
        `
    },
    {
        title: "৭. Past Indefinite Tense",
        content: `
            <h2>Past Indefinite Tense</h2>
            <p>অতীতে কোনো কাজ শেষ হয়েছিল। (বাংলায়: ল, লাম, লে, লেন)</p>

            <div class="rule-box">
                <strong>গঠন:</strong><br>
                Sub + Verb (Past Form/V2) + Object
            </div>

            <h3>Examples:</h3>
            <ul>
                <li>আমি স্কুলে গিয়েছিলাম - I <strong>went</strong> to school.</li>
                <li>সে বল খেলেছিল - He <strong>played</strong> football.</li>
                <li>তারা কাজটি করেছিল - They <strong>did</strong> the work.</li>
            </ul>

            <div class="note-box">
                Note: Yesterday, ago, long since, last night থাকলে সর্বদা Past Indefinite হয়।
            </div>
        `
    },
    {
        title: "৮. Past Continuous Tense",
        content: `
            <h2>Past Continuous Tense</h2>
            <p>অতীতে কোনো কাজ কিছুক্ষণ ধরে চলছিল। (বাংলায়: ছিলাম, ছিল, ছিলে)</p>

            <div class="rule-box">
                <strong>গঠন:</strong><br>
                Sub + was / were + Verb(ing) + Object
            </div>

            <h3>ব্যবহারবিধি:</h3>
            <ul>
                <li><strong>Was:</strong> I, He, She, It.</li>
                <li><strong>Were:</strong> We, You, They.</li>
            </ul>

            <div class="example-box">
                <p>সে ঘুমাচ্ছিল - He was sleeping.</p>
                <p>আমরা টিভি দেখছিলাম - We were watching TV.</p>
            </div>
        `
    },
    {
        title: "৯. Past Perfect Tense (খুব গুরুত্বপূর্ণ)",
        content: `
            <h2>Past Perfect Tense</h2>
            <p>অতীতে দুটি কাজ সম্পন্ন হলে, যেটি <strong>আগে</strong> ঘটেছিল সেটি Past Perfect এবং যেটি <strong>পরে</strong> ঘটেছিল সেটি Past Indefinite.</p>

            <div class="rule-box">
                <strong>গঠন:</strong><br>
                Sub + had + Verb(V3) + Object
            </div>

            <h3>ডাক্তার আসার আগে...</h3>
            <p>এই বিখ্যাত উদাহরণটি দেখুন:</p>
            <ul>
                <li>ডাক্তার আসার <strong>পূর্বে</strong> রোগীটি মারা গেল।<br>
                The patient <strong>had died</strong> before the doctor came.</li>
            </ul>

            <div class="note-box">
                <strong>সহজ সূত্র:</strong><br>
                Before এর আগে Had বসে।<br>
                After এর পরে Had বসে।
            </div>
            
        `
    },
    {
        title: "১০. Past Perfect Continuous",
        content: `
            <h2>Past Perfect Continuous Tense</h2>
            <p>অতীতে কোনো কাজ দীর্ঘ সময় ধরে চলছিল।</p>

            <div class="rule-box">
                <strong>গঠন:</strong><br>
                Sub + had been + Verb(ing) + Since/For + Time
            </div>

            <div class="example-box">
                <p>সে এক ঘণ্টা ধরে অপেক্ষা করছিল - He <strong>had been waiting</strong> for an hour.</p>
            </div>
        `
    },
    {
        title: "১১. Future Indefinite Tense",
        content: `
            <h2>Future Indefinite Tense</h2>
            <p>ভবিষ্যতে কোনো কাজ হবে। (বাংলায়: ব, বে, বেন)</p>

            <div class="rule-box">
                <strong>গঠন:</strong><br>
                Sub + shall / will + Verb(V1) + Object
            </div>

            <h3>Examples:</h3>
            <ul>
                <li>আমি ঢাকা যাব - I <strong>will go</strong> to Dhaka.</li>
                <li>সে কাজটি করবে - He <strong>will do</strong> the work.</li>
            </ul>
            <p>Note: আধুনিক ইংরেজিতে সব জায়গায় 'will' ব্যবহার করা যায়।</p>
        `
    },
    {
        title: "১২. Future Continuous Tense",
        content: `
            <h2>Future Continuous Tense</h2>
            <p>ভবিষ্যতে কোনো কাজ চলতে থাকবে। (বাংলায়: তে থাকব, তে থাকবে)</p>

            <div class="rule-box">
                <strong>গঠন:</strong><br>
                Sub + will be + Verb(ing) + Object
            </div>

            <div class="example-box">
                <p>আমি বই পড়তে থাকব - I <strong>will be reading</strong> the book.</p>
                <p>সে অপেক্ষা করতে থাকবে - He <strong>will be waiting</strong>.</p>
            </div>
        `
    },
    {
        title: "১৩. Future Perfect Tense",
        content: `
            <h2>Future Perfect Tense</h2>
            <p>ভবিষ্যতে নির্দিষ্ট সময়ের মধ্যে কোনো কাজ হয়ে থাকবে।</p>

            <div class="rule-box">
                <strong>গঠন:</strong><br>
                Sub + will have + Verb(V3) + Object
            </div>

            <div class="example-box">
                <p>বাবা আসার আগেই আমি পড়া শেষ করব।<br>
                I <strong>will have finished</strong> my lesson before father comes.</p>
            </div>
        `
    },
    {
        title: "১৪. Future Perfect Continuous",
        content: `
            <h2>Future Perfect Continuous Tense</h2>
            <p>ভবিষ্যতে কোনো কাজ দীর্ঘ সময় ধরে চলতে থাকবে। (এর ব্যবহার খুব কম)</p>

            <div class="rule-box">
                <strong>গঠন:</strong><br>
                Sub + will have been + Verb(ing) + for/from + Time
            </div>

            <p>Example: I will have been doing the work for two days.</p>
        `
    },
    {
        title: "১৫. Negative & Interrogative (প্রশ্ন ও না-বোধক)",
        content: `
            <h2>কীভাবে প্রশ্ন ও না-বোধক করবেন?</h2>
            
            <h3>Present Indefinite:</h3>
            <ul>
                <li><strong>Negative:</strong> Do not / Does not. (He does not go.)</li>
                <li><strong>Interrogative:</strong> Do / Does আগে আসবে। (Does he go?)</li>
            </ul>

            <h3>Past Indefinite:</h3>
            <ul>
                <li><strong>Negative:</strong> Did not + V1. (I did not go.)</li>
                <li><strong>Interrogative:</strong> Did + Sub + V1? (Did I go?)</li>
            </ul>

            <div class="note-box">
                মনে রাখবেন: Do, Does, Did ব্যবহার করলে মূল Verb-এর সাথে s/es বা Past form থাকে না। সর্বদা V1 হয়।
            </div>
        `
    },
    {
        title: "১৬. Right Form of Verbs এর নিয়ম",
        content: `
            <h2>Tense অনুযায়ী Verb এর সঠিক রূপ</h2>
            
            <p>১. বর্তমানে কোনো কাজ চলছে (Now, at this moment) থাকলে Present Continuous হয়।</p>
            <p>২. Yesterday, Last year, Last month থাকলে Past Indefinite হয়।</p>
            <p>৩. Tomorrow, Next week থাকলে Future Indefinite হয়।</p>
            <p>৪. Just, Already, Yet থাকলে Present Perfect হয়।</p>
            
            
        `
    },
    {
        title: "১৭. Stative Verbs (যেগুলোর Continuous হয় না)",
        content: `
            <h2>Stative Verbs</h2>
            <p>কিছু Verb আছে যাদের সাথে সাধারণত 'ing' যোগ করে Continuous Tense করা যায় না। এগুলোকে Indefinite Tense এ রাখতে হয়।</p>

            <div class="rule-box">
                <strong>List:</strong> See, hear, smell, like, love, hate, want, know, believe.
            </div>

            <h3>Examples:</h3>
            <ul>
                <li>❌ I am seeing a bird. (ভুল)</li>
                <li>✅ I see a bird. (সঠিক)</li>
                <li>❌ He is wanting a pen. (ভুল)</li>
                <li>✅ He wants a pen. (সঠিক)</li>
            </ul>
        `
    },
    {
        title: "১৮. ১০০টি গুরুত্বপূর্ণ Verb List",
        content: `
            <h2>Verb Forms (V1, V2, V3)</h2>
            <p>Tense পারার জন্য এই লিস্টটি মুখস্থ থাকা জরুরি।</p>

            <table border="1">
                <tr><th>V1 (Present)</th><th>V2 (Past)</th><th>V3 (Past Participle)</th></tr>
                <tr><td>Go (যাওয়া)</td><td>Went</td><td>Gone</td></tr>
                <tr><td>Eat (খাওয়া)</td><td>Ate</td><td>Eaten</td></tr>
                <tr><td>Do (করা)</td><td>Did</td><td>Done</td></tr>
                <tr><td>Come (আসা)</td><td>Came</td><td>Come</td></tr>
                <tr><td>Write (লেখা)</td><td>Wrote</td><td>Written</td></tr>
                <tr><td>See (দেখা)</td><td>Saw</td><td>Seen</td></tr>
                <tr><td>Buy (কেনা)</td><td>Bought</td><td>Bought</td></tr>
                <tr><td>Catch (ধরা)</td><td>Caught</td><td>Caught</td></tr>
            </table>
            <p>এরকম আরও Verb শিখতে হবে।</p>
        `
    },
    {
        title: "১৯. Translation Practice (অনুশীলন)",
        content: `
            <h2>নিজেরা চেষ্টা করুন (Answers নিচে)</h2>
            <p>নিচের বাক্যগুলো ইংরেজিতে অনুবাদ করুন:</p>
            <ol>
                <li>সে গতকাল এসেছিল।</li>
                <li>আমি এখন টিভি দেখছি।</li>
                <li>সূর্য পশ্চিম দিকে অস্ত যায়।</li>
                <li>তুমি কি স্কুলে যাবে?</li>
                <li>সে দুই ঘণ্টা ধরে পড়ছে।</li>
            </ol>

            <div class="example-box">
                <h3>উত্তরমালা:</h3>
                <ol>
                    <li>He came yesterday.</li>
                    <li>I am watching TV now.</li>
                    <li>The sun sets in the west.</li>
                    <li>Will you go to school?</li>
                    <li>He has been reading for 2 hours.</li>
                </ol>
            </div>
        `
    },
    {
        title: "২০. লেখক পরিচিতি ও সমাপ্তি",
        content: `
            <h2>ধন্যবাদান্তে</h2>
            <div style="text-align:center;">
                

[Image of author]

                <h3>মঞ্জুরুল হক</h3>
                <p>প্রভাষক, অর্থনীতি</p>
                <hr>
                <p>📞 মোবাইল: ০১৭১৫২৪৭৫৮৮</p>
                <p>💬 WhatsApp: 01715247588</p>
                <p>📧 মেইল: monjurul.jusc@gmail.com</p>
                <p>🌐 <a href="https://www.facebook.com/himel.hemu" target="_blank">ফেসবুক প্রোফাইল</a></p>
            </div>
            
            <p style="text-align:center; margin-top:30px;">
                এই Tense এর বইটি ভালো লাগলে বন্ধুদের সাথে শেয়ার করুন।
            </p>
        `
    }

];
