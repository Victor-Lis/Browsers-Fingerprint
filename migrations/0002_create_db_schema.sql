CREATE TABLE visitor_fingerprints (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    ip_address TEXT,
    user_agent TEXT,
    accept_language TEXT,
    platform TEXT,
    country TEXT,
    region TEXT,
    city TEXT,
    isp TEXT,
    colo TEXT
);