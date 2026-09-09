from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from reportlab.graphics import renderPDF
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing


OUT = "output/pdf/cankaj-saturday-meeting-pack.pdf"
W, H = A4
M = 18 * mm
INK = HexColor("#202622")
MUTED = HexColor("#626862")
PAPER = HexColor("#F2EFE8")
LINE = HexColor("#CDC7BC")
BLUE = HexColor("#249ED3")
RED = HexColor("#CE2E2E")
STONE = HexColor("#756658")
LIVE_URL = "https://cankaj-dual-services-demo.vercel.app/"
REVIEW_URL = "https://cankaj-dual-services-demo.vercel.app/review"


def wrap(c, text, x, y, width, size=10, leading=14, color=MUTED, font="Helvetica"):
    style = ParagraphStyle(
        "body",
        fontName=font,
        fontSize=size,
        leading=leading,
        textColor=color,
        alignment=TA_LEFT,
        spaceAfter=0,
    )
    p = Paragraph(text, style)
    _, ph = p.wrap(width, 100 * mm)
    p.drawOn(c, x, y - ph)
    return y - ph


def rule(c, y, x=M, width=W - 2 * M, color=LINE):
    c.setStrokeColor(color)
    c.setLineWidth(0.55)
    c.line(x, y, x + width, y)


def check(c, x, y, label, size=9.2, width=150 * mm):
    c.setStrokeColor(INK)
    c.setLineWidth(0.65)
    c.rect(x, y - 3.4 * mm, 3.6 * mm, 3.6 * mm, stroke=1, fill=0)
    wrap(c, label, x + 6 * mm, y + 0.4 * mm, width, size=size, leading=12.2, color=INK)


def field(c, label, x, y, width, height=10 * mm):
    c.setFont("Helvetica-Bold", 7.2)
    c.setFillColor(STONE)
    c.drawString(x, y, label.upper())
    rule(c, y - height, x, width)


def qr(c, url, x, y, size=30 * mm):
    widget = QrCodeWidget(url)
    bounds = widget.getBounds()
    bw = bounds[2] - bounds[0]
    bh = bounds[3] - bounds[1]
    drawing = Drawing(size, size, transform=[size / bw, 0, 0, size / bh, 0, 0])
    drawing.add(widget)
    renderPDF.draw(drawing, c, x, y)


def header(c, section, title, subtitle=None, page=1):
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(M, H - 16 * mm, "CANKAJ / MEETING PACK")
    c.setFillColor(STONE)
    c.drawRightString(W - M, H - 16 * mm, f"{section.upper()}  /  {page:02d}")
    rule(c, H - 20 * mm)
    c.setFillColor(INK)
    c.setFont("Times-Roman", 28)
    c.drawString(M, H - 36 * mm, title)
    y = H - 43 * mm
    if subtitle:
        y = wrap(c, subtitle, M, y, 142 * mm, size=10.5, leading=14.5)
    return y - 7 * mm


def footer(c, page):
    rule(c, 14 * mm)
    c.setFont("Helvetica", 7)
    c.setFillColor(MUTED)
    c.drawString(M, 9 * mm, "Cankaj Super Car Wash + BC Stone Mason & Construction Restoration")
    c.drawRightString(W - M, 9 * mm, str(page))


def page_one(c):
    y = header(
        c,
        "Demo",
        "Saturday meeting plan",
        "Use this to keep the conversation commercial. The goal is to leave with confirmed facts, usable content and clear approval - not to redesign the site in the room.",
        1,
    )
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(M, y, "WHAT TO BRING")
    y -= 8 * mm
    items = [
        "Laptop with the live demo already open in Auto and Property tabs",
        "Phone with mobile data, charger and a personal hotspot as backup",
        "This printed pack, two pens and a few sticky notes",
        "The three original logo / business-card images Bledar supplied",
        "An offline screen recording or screenshots in case the venue internet fails",
    ]
    for item in items:
        check(c, M, y, item)
        y -= 9 * mm

    y -= 2 * mm
    rule(c, y)
    y -= 9 * mm
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(INK)
    c.drawString(M, y, "15-MINUTE DEMO ORDER")
    y -= 9 * mm
    steps = [
        ("01", "The split entrance", "Let him choose which side to enter first."),
        ("02", "Auto experience", "Show services, before-and-after, gallery, reviews and map."),
        ("03", "Property experience", "Show the calmer identity, process and photo-led enquiry."),
        ("04", "Phone view", "Show the fixed Call, WhatsApp and Directions actions."),
        ("05", "Decisions", "Work through pages 2-4 and write down exact answers."),
    ]
    for num, title, desc in steps:
        c.setFillColor(BLUE if num in ("01", "02", "04") else STONE)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(M, y, num)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 10)
        c.drawString(M + 12 * mm, y, title)
        wrap(c, desc, M + 58 * mm, y + 1.5 * mm, 106 * mm, size=9.2, leading=12)
        y -= 13 * mm

    qr(c, LIVE_URL, W - M - 31 * mm, 19 * mm, 29 * mm)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(M, 39 * mm, "LIVE DEMO")
    wrap(c, "Scan to open the current website. Keep this page beside the laptop during the presentation.", M, 35 * mm, 115 * mm, size=8.5, leading=11.5)
    footer(c, 1)


def page_two(c):
    y = header(
        c,
        "Confirm",
        "Facts Bledar must approve",
        "Read every line back to him. Tick only when it is accurate enough to publish. Cross out anything that is not offered.",
        2,
    )
    checks = [
        "Trading name: Cankaj Super Car Wash",
        "Location: Halpins Service Station, Limerick Road, Newmarket-on-Fergus, V95 YR25",
        "Public phone: 087 707 0331",
        "Public email: bledar24@gmail.com",
        "Opening hours: Monday-Saturday 09:00-18:00; Sunday closed",
        "Property name: BC Stone Mason & Construction Restoration",
        "Business name registration number: CRO 789324",
        "Property work is offered across County Clare",
        "Bledar is happy to be named as the owner contact",
    ]
    for item in checks:
        check(c, M, y, item, width=160 * mm)
        y -= 10 * mm

    y -= 2 * mm
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(INK)
    c.drawString(M, y, "MUST ASK - DO NOT GUESS")
    y -= 9 * mm
    field(c, "Years of relevant experience", M, y, 78 * mm)
    field(c, "Fully insured? If yes, what cover?", M + 88 * mm, y, 78 * mm)
    y -= 20 * mm
    field(c, "Payment methods accepted", M, y, 78 * mm)
    field(c, "How far will property jobs travel?", M + 88 * mm, y, 78 * mm)
    y -= 20 * mm
    field(c, "Are estimates free?", M, y, 78 * mm)
    field(c, "Any qualifications or specialist skills?", M + 88 * mm, y, 78 * mm)
    footer(c, 2)


def price_row(c, y, service):
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 9.2)
    c.drawString(M, y, service)
    c.setFont("Helvetica", 8)
    c.setFillColor(MUTED)
    c.drawString(M + 54 * mm, y, "Price / from")
    c.drawString(M + 88 * mm, y, "Typical time")
    c.drawString(M + 124 * mm, y, "What is included")
    rule(c, y - 13 * mm)
    c.setStrokeColor(LINE)
    for x in (M + 52 * mm, M + 86 * mm, M + 122 * mm):
        c.line(x, y + 4 * mm, x, y - 13 * mm)


def page_three(c):
    y = header(
        c,
        "Services",
        "Prices and scope worksheet",
        "Exact prices and inclusions are the largest missing sales information. If the answer depends on size or condition, write 'from' and note the rule clearly.",
        3,
    )
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(BLUE)
    c.drawString(M, y, "CAR WASH")
    y -= 9 * mm
    for service in ("Hand wash", "Wash + wax", "Mini valet", "Full valet"):
        price_row(c, y, service)
        y -= 22 * mm

    field(c, "Cars / SUVs / vans / buses / trucks accepted?", M, y, 166 * mm)
    y -= 19 * mm
    field(c, "Does valeting require a booking?", M, y, 78 * mm)
    field(c, "Current busiest / quietest times", M + 88 * mm, y, 78 * mm)

    y -= 23 * mm
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(STONE)
    c.drawString(M, y, "PROPERTY - TICK ONLY ACTIVE SERVICES")
    y -= 9 * mm
    services = [
        "Stone masonry and repairs",
        "Repointing",
        "Construction restoration",
        "Interior painting",
        "Exterior painting",
        "Exterior power washing",
        "Deep interior cleaning",
        "General property maintenance",
    ]
    for i, service in enumerate(services):
        x = M if i % 2 == 0 else M + 88 * mm
        yy = y - (i // 2) * 10 * mm
        check(c, x, yy, service, width=72 * mm)
    y -= 45 * mm
    field(c, "Best / most profitable jobs to feature first", M, y, 166 * mm, 14 * mm)
    footer(c, 3)


def page_four(c):
    y = header(
        c,
        "Content",
        "Leave with these assets",
        "The site will sell much harder once the demonstration images are replaced with genuine work and the Google listing is owned.",
        4,
    )
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(INK)
    c.drawString(M, y, "PHOTOS TO GET FROM BLEDAR")
    y -= 8 * mm
    photos = [
        "One clear owner / team portrait",
        "Forecourt and roadside entrance",
        "Price board and opening-hours sign",
        "Five genuine car wash process photos",
        "Three genuine finished-vehicle photos",
        "Three property projects with before, during and after views",
        "Permission to publish each identifiable customer vehicle or property",
    ]
    for item in photos:
        check(c, M, y, item, width=152 * mm)
        y -= 9 * mm

    y -= 2 * mm
    rule(c, y)
    y -= 9 * mm
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(INK)
    c.drawString(M, y, "GOOGLE BUSINESS PROFILE")
    y -= 8 * mm
    google = [
        "Bledar can sign in to the Google account that should own the listing",
        "Claim the existing listing - do not create a duplicate",
        "Add the website, logo, hours and real photographs after verification",
        "Respond calmly to the recent critical review",
        "Ask every customer for an honest review without an incentive or rating filter",
    ]
    for item in google:
        check(c, M, y, item, width=152 * mm)
        y -= 9 * mm

    y -= 3 * mm
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(M, y, "FINAL DECISIONS")
    y -= 9 * mm
    field(c, "Approved to keep developing this direction?", M, y, 78 * mm)
    field(c, "Preferred domain name", M + 88 * mm, y, 78 * mm)
    y -= 20 * mm
    field(c, "Next review date", M, y, 78 * mm)
    field(c, "Bledar's first action", M + 88 * mm, y, 78 * mm)

    qr(c, REVIEW_URL, W - M - 25 * mm, 18 * mm, 23 * mm)
    c.setFont("Helvetica-Bold", 7.2)
    c.setFillColor(MUTED)
    c.drawRightString(W - M - 29 * mm, 24 * mm, "REVIEW PAGE")
    footer(c, 4)


def build():
    c = canvas.Canvas(OUT, pagesize=A4)
    c.setTitle("Cankaj Saturday Meeting Pack")
    c.setAuthor("Cankaj website project")
    for page in (page_one, page_two, page_three, page_four):
        page(c)
        c.showPage()
    c.save()


if __name__ == "__main__":
    build()
