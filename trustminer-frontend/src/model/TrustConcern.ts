export const TrustConcern: { [id: number]: string } = {
    1: "Integrity",
    2: "Confidentiality",
    3: "Non-Repudiation",
    4: "Availability",
    5: "Performance",
    6: "Resilience"
}

export const TrustConcernRM: { [id: string]: number } = {
    "Integrity": 1,
    "Confidentiality": 2,
    "Non-Repudiation": 3,
    "Availability": 4,
    "Performance": 5,
    "Resilience": 6
}