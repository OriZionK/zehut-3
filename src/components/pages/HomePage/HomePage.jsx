import React from 'react';
import './HomePage.css';

const HomePage = () => {

    const handleWhatsAppClick = () => {
        window.open('https://chat.whatsapp.com/K1TwqlDOSyEHh917N7hs6y', '_blank');
    };

    return (
        <div className="home-container">
            <header className="header">
                <h1> ברוכים הבאים לזהות השלישית</h1>
            </header>
            <main className="content">
                <section className="section">
                    <p>
                    אם גם לכם נמאס להיות רוב דומם.<br />
                    אם גם אתם חשים שההנהגה הפוליטית והרבנית הקיימת, הן מהצד החרדי השמרני והן מהצד החרד"לי, שמשתפות פעולה בכיוונים שגויים ומזיקים, אינן מייצגות אתכם.<br />
                    אם גם אתם מבקשים לבטל את החלוקה הדתית האנכרוניסטית סביב שאלת היחס למדינה, או שאלות של שמאל וימין, ולהחליפה בזהות שעוסקת בשאלות רלוונטיות יותר של מוסר, מודרנה, חירות, השכלה ושוויון, וקידום שילובן של הקבוצות החרדיות במערכות הצבא, ההשכלה והתעסוקה.<br />
                    אם גם אתם מבקשים להשמיע קול אחר, קול צלול הקורא לליכוד שורות סביב עולם דתי הגיוני ומאוזן יותר.
                    </p>

                    <h1>
                    אתם מוזמנים להצטרף ל-'זהות השלישית'
                    </h1>
                </section>
                <section className="section">
                    <p>
                    הזהות השלישית שמה למטרה לעצור את הקיבעון המחשבתי מלהשתלט על השיח. בראש מעייננו עיצוב מחדש של יהדות, ושל יחסי דת ומדינה בישראל 
                    <a href="https://docs.google.com/document/d/1g5z7eRPQ3Y7ixabxzGIPWN27qmsMpe1F/edit">ברוח מסמך הקווים שלנו</a>.
                    </p>
                </section>
                <section className="section">
                    <p>
                    הזהות השלישית מאמינה בדתיות מודרנית, ונלחמת בזיהוי המגמתי של מודרניות וליברליות עם חוסר מחויבות ("לייטיות"). זוהי הכפשה שמטרתה להותיר את ההגמוניה בידי שתי הזהויות השמרניות הקיימות.
                    </p>
                </section>
                <section className="section">
                    <p>
                    הזהות השלישית מבקשת לחבר את כלל הגורמים המודרניים בציבור הדתי-לאומי ובציבור החרדי, אנשי שמאל ואנשי ימין (תוך שמירה על ייחודיותה של כל קבוצה), וליצור זהות דתית מודרנית משותפת.
                    </p>
                </section>
            </main>
            <footer className="footer">
                <button className="cta-button" onClick={handleWhatsAppClick}> הצטרפו לקבוצת הוואצאפ שלנו!</button>
            </footer>
        </div>
    );
};

export default HomePage;
