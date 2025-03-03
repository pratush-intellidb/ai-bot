const predefinedResponses = {
    "intellidb enterprise": {
        keywords: ["intellidb", "enterprise", "overview", "about", "what is", "tell me about"],
        response: `<div class="feature-highlight">
            <h3>🚀 IntelliDB Enterprise</h3>
            <p>IntelliDB Enterprise is an AI-enhanced database platform built on PostgreSQL, designed to empower data-driven enterprises with intelligent data management, high-speed transactions, and seamless integration capabilities.</p>
            <ul>
                <li>✓ <b>AI-Powered Performance Optimization:</b> Leverages artificial intelligence to enhance database efficiency, including automated performance tuning and adaptive indexing.</li>
                <li>✓ <b>Advanced Security Features:</b> Implements robust measures such as encryption, role-based access control (RBAC), and comprehensive auditing.</li>
                <li>✓ <b>High Availability & Disaster Recovery:</b> Features automatic failover, replication, and geo-redundant backups to ensure minimal downtime.</li>
                <li>✓ <b>Seamless Cloud Integration:</b> Offers flexible deployment options across on-premises, hybrid, and multi-cloud environments.</li>
                <li>✓ <b>Comprehensive Support & Compliance:</b> Provides 24/7 expert support while meeting industry standards like GDPR, HIPAA, and SOC 2.</li>
            </ul>
            <p class="tip">💡 Explore IntelliDB's AI capabilities and seamless cloud integration to transform your data management strategy!</p>
        </div>`
    },

    "greeting": {
        keywords: ["hi", "hello", "namaste", "hey", "greetings", "good morning", "good evening"],
        response: `<div class="greeting-message">
            <h3>🙏 Namaste! 👋 Hello!</h3>
            <p>Welcome to IntelliDB! How can I assist you today?</p>
            <ul>
                <li>✓ Ask about <b>IntelliDB Enterprise</b> features.</li>
                <li>✓ Learn more about <b>AI-driven performance optimization.</b></li>
                <li>✓ Explore <b>Oracle to IntelliDB migration solutions.</b></li>
                <li>✓ Get insights into <b>security, cloud deployment, and automation.</b></li>
                <li>✓ Need help? Ask about <b>troubleshooting & best practices.</b></li>
            </ul>
            <p class="tip">💡 Try asking: "<b>What makes IntelliDB different from PostgreSQL?</b>"</p>
        </div>`
    },
    
    "security": {
        keywords: ["security", "compliance", "encryption", "access control"],
        response: `<div class="security-section">
            <h3>🔐 Enterprise-Grade Security</h3>
            <p>IntelliDB Enterprise prioritizes the protection of your data with a layered security framework designed to prevent unauthorized access and ensure compliance with industry standards.</p>
            <ul>
                <li><b>Encryption at Rest and in Transit:</b> Utilizes robust encryption protocols to secure data both during storage and transmission.</li>
                <li><b>Role-Based Access Control (RBAC):</b> Provides granular user permissions for strict access management.</li>
                <li><b>Multi-Factor Authentication (MFA):</b> Adds an extra layer of protection by requiring multiple verification methods.</li>
                <li><b>Comprehensive Auditing Logs:</b> Tracks database activity to support compliance and security monitoring.</li>
                <li><b>Timely Security Patches:</b> Keeps your system secure against emerging threats with regular updates.</li>
            </ul>
            <p class="tip">💡 IntelliDB complies with GDPR, HIPAA, SOC 2, and PCI-DSS to ensure your data remains protected.</p>
        </div>`
    },
    "pricing": {
        keywords: ["pricing", "subscription", "cost", "opex", "capex"],
        response: `<div class="pricing-section">
            <h3>💰 Flexible Pricing Model</h3>
            <p>IntelliDB Enterprise offers a simple and transparent pricing structure with no upfront capital expenditure (CAPEX), ensuring cost-effectiveness and scalability.</p>
            <ul>
                <li><b>One-Time Subscription Fee:</b> Pay a single subscription fee for the installer with no hidden costs.</li>
                <li><b>OPEX-Based Model:</b> No capital investment required—only operational expenditure (OPEX).</li>
                <li><b>Scalable Pricing:</b> Tailored to meet the needs of enterprises of all sizes.</li>
            </ul>
            <p class="tip">📩 For detailed pricing information, contact us at <a href="mailto:sales@intellidbenterprise.com">sales@intellidbenterprise.com</a>.</p>
        </div>`
    } ,
    "ai_ml": {
        keywords: ["ai", "ml", "machine learning", "predictive", "automation"],
        response: `<div class="ai-section">
            <h3>🤖 AI/ML Integration</h3>
            <p>IntelliDB leverages artificial intelligence and machine learning to optimize database performance and deliver actionable insights.</p>
            <ul>
                <li><b>AI-Powered Query Optimization:</b> Dynamically refines query execution plans to maximize speed and efficiency.</li>
                <li><b>Predictive Analytics:</b> Anticipates trends and potential issues by analyzing historical data patterns.</li>
                <li><b>Automated Performance Tuning:</b> Continuously monitors and adjusts configurations to maintain peak performance.</li>
            </ul>
        </div>`
    },

    "migration": {
        keywords: ["migration", "oracle", "postgresql", "migrate", "convert"],
        response: `<div class="migration-section">
            <h3>🔄 Seamless Database Migration</h3>
            <p>Transitioning to IntelliDB Enterprise is made simple with our robust migration suite, ensuring a smooth shift from legacy systems with minimal downtime.</p>
            <ul>
                <li><b>Automated Schema and Data Transformation:</b> Converts existing schemas and data with minimal manual intervention.</li>
                <li><b>Data Validation and Rollback:</b> Ensures integrity during migration with comprehensive validation and rollback support.</li>
                <li><b>Expert Migration Assistance:</b> Access professional services for handling complex migration challenges.</li>
            </ul>
            <p class="tip">💡 Achieve near-zero downtime migration with IntelliDB’s automated tools and expert support.</p>
        </div>`
    },

    "cloud_deployment": {
        keywords: ["cloud", "aws", "gcp", "azure", "multi-cloud", "hybrid"],
        response: `<div class="cloud-section">
            <h3>☁️ Cloud & Hybrid Deployments</h3>
            <p>IntelliDB is designed to offer maximum deployment flexibility, supporting on-premises, hybrid, and fully cloud-based architectures.</p>
            <ul>
                <li><b>Fully Managed Cloud Solutions:</b> Scale effortlessly with cloud-native deployments optimized for AWS, Azure, and GCP.</li>
                <li><b>Hybrid Deployment Support:</b> Seamlessly integrate on-premises infrastructure with cloud services.</li>
                <li><b>On-Premises Flexibility:</b> Enjoy the benefits of robust, in-house data center deployments with enterprise-grade security.</li>
            </ul>
            <p class="tip">💡 Leverage the best of both worlds with IntelliDB’s flexible deployment options.</p>
        </div>`
    },

    "analytics": {
        keywords: ["analytics", "reporting", "business intelligence", "dashboard"],
        response: `<div class="analytics-section">
            <h3>📊 Advanced Analytics & Reporting</h3>
            <p>Gain real-time insights with IntelliDB’s integrated analytics suite, built to transform raw data into actionable business intelligence.</p>
            <ul>
                <li><b>Integrated BI Dashboard:</b> Monitor key metrics and trends in real time.</li>
                <li><b>Data Warehousing Support:</b> Optimized for OLAP workloads to support complex analytical queries.</li>
                <li><b>Time-Series Analytics:</b> Specialized tools for IoT and financial data analysis.</li>
                <li><b>Machine Learning Predictions:</b> Utilize AI-driven forecasting to plan for future demands.</li>
                <li><b>Streaming Data Processing:</b> Analyze event-driven data as it flows in, ensuring timely insights.</li>
            </ul>
        </div>`
    },

    "automation": {
        keywords: ["automation", "scripting", "tasks", "scheduler"],
        response: `<div class="automation-section">
            <h3>🔄 Database Automation</h3>
            <p>Reduce manual workload with advanced automated operations that ensure your database runs efficiently around the clock.</p>
            <ul>
                <li><b>Automated Index Management:</b> Detects and optimizes indexes proactively to boost query performance.</li>
                <li><b>Task Scheduler:</b> Automates routine maintenance jobs, backups, and health checks.</li>
                <li><b>Self-Healing Database:</b> Uses predictive analytics to automatically detect and resolve performance issues.</li>
                <li><b>Policy-Based Resource Allocation:</b> Dynamically adjusts CPU and memory resources based on real-time workload demands.</li>
                <li><b>Automated Failover & Recovery:</b> Minimizes downtime with rapid detection of issues and prompt recovery processes.</li>
            </ul>
        </div>`
    },

    "architecture": {
        keywords: ["architecture", "design", "postgresql", "system"],
        response: `<div class="architecture-section">
            <h3>🏗️ IntelliDB Enterprise Architecture</h3>
            <p>Built on PostgreSQL, IntelliDB Enterprise redefines database architecture by integrating AI-driven enhancements, multi-layer security, and scalable design to meet modern enterprise demands.</p>
            <ul>
                <li><b>Storage Engine & MVCC:</b> Utilizes Multi-Version Concurrency Control for efficient, concurrent transaction processing.</li>
                <li><b>Process Architecture:</b> Leverages PostgreSQL’s proven process model with dedicated background workers for parallel processing.</li>
                <li><b>Advanced Memory Management:</b> Features intelligent caching, adaptive shared buffers, and dynamic memory allocation.</li>
                <li><b>Write-Ahead Logging (WAL):</b> Ensures ACID compliance and provides robust crash recovery.</li>
                <li><b>Integrated AI/ML Modules:</b> Enhances query optimization and resource management with machine learning algorithms.</li>
            </ul>
            <p class="tip">💡 Discover how IntelliDB's innovative architecture delivers performance and reliability for enterprise applications.</p>
        </div>`
    },

    "tools": {
        keywords: ["tools", "utilities", "features", "capabilities"],
        response: `<div class="tools-section">
            <h3>🛠️ IntelliDB Enterprise Tools</h3>
            <p>Equipped with over 59 specialized tools, IntelliDB Enterprise streamlines database management, from performance tuning to security enforcement and AI-driven insights.</p>
            
            <div class="tool-category">
                <h4>🔹 Performance & Optimization Tools</h4>
                <ul>
                    <li>AI Query Optimizer</li>
                    <li>Index Advisor & Auto-Tuning</li>
                    <li>Live Query Performance Monitor</li>
                    <li>Parallel Query Execution Enhancer</li>
                    <li>Resource Allocation Analyzer</li>
                </ul>
            </div>
            
            <div class="tool-category">
                <h4>🔹 Security & Compliance Tools</h4>
                <ul>
                    <li>Advanced Role-Based Access Control</li>
                    <li>IntelliDB Audit (pgaudit-based)</li>
                    <li>Data Redaction & Masking</li>
                    <li>Encryption Suite (TLS, TDE, Column-Level Encryption)</li>
                    <li>MFA Integration</li>
                </ul>
            </div>
            
            <div class="tool-category">
                <h4>🔹 High Availability & Replication Tools</h4>
                <ul>
                    <li>Streaming Replication Dashboard</li>
                    <li>Bi-Directional Replication Manager</li>
                    <li>Failover & Auto-Recovery Manager</li>
                    <li>Load Balancing Console</li>
                </ul>
            </div>
            
            <div class="tool-category">
                <h4>🔹 AI/ML-Driven Insights Tools</h4>
                <ul>
                    <li>Predictive Database Analytics</li>
                    <li>Automated Anomaly Detection</li>
                    <li>Self-Healing Mechanism</li>
                    <li>Smart Data Classification</li>
                </ul>
            </div>
        </div>`
    },

    "high availability": {
        keywords: ["high availability", "ha", "replication", "uptime"],
        response: `<div class="ha-section">
            <h3>⚙️ High Availability (HA) in IntelliDB Enterprise</h3>
            <p>Experience continuous uptime with IntelliDB Enterprise’s robust high availability features, ensuring your mission-critical applications remain online at all times.</p>
            <ul>
                <li><b>Synchronous & Asynchronous Replication:</b> Guarantees data consistency and redundancy across multiple nodes.</li>
                <li><b>Multi-Node Failover:</b> Automatically shifts operations to standby nodes during system failures.</li>
                <li><b>Load Balancing:</b> Evenly distributes workloads to optimize performance and resilience.</li>
                <li><b>Distributed Clustering:</b> Supports multi-region deployments for global scalability.</li>
                <li><b>Zero-Downtime Upgrades:</b> Implements online patching and rolling updates without service disruption.</li>
            </ul>
        </div>`
    },

    "bdr": {
        keywords: ["bdr", "bidirectional replication", "multi-master", "replication"],
        response: `<div class="bdr-section">
            <h3>🔄 Bi-Directional Replication (BDR) in IntelliDB Enterprise</h3>
            <p>IntelliDB's Bi-Directional Replication (BDR) offers real-time synchronization across distributed systems, ensuring data remains consistent and available across multiple writable nodes.</p>
            <ul>
                <li><b>Multi-Master Replication:</b> Allows several nodes to operate as primary, eliminating single points of failure.</li>
                <li><b>Automatic Conflict Resolution:</b> Employs intelligent algorithms to manage and resolve write conflicts.</li>
                <li><b>Geo-Distributed Support:</b> Enables replication across different regions for enhanced disaster recovery.</li>
                <li><b>Asynchronous Replication:</b> Balances high performance with data consistency in diverse network environments.</li>
            </ul>
        </div>`
    },

    "performance": {
        keywords: ["performance", "speed", "fast", "optimization"],
        response: `<div class="performance-section">
            <h3>⚡ Performance Features</h3>
            <p>Designed for speed and scalability, IntelliDB Enterprise delivers outstanding performance even under heavy workloads, ensuring efficient query processing and resource utilization.</p>
            <div class="perf-category">
                <h4>🔹 Query Optimization</h4>
                <ul>
                    <li>AI-Driven Query Planning</li>
                    <li>Automatic Index Management</li>
                    <li>Statistics-Based Query Optimization</li>
                    <li>Query Caching Mechanisms</li>
                </ul>
            </div>
            <div class="perf-category">
                <h4>🔹 Resource Management</h4>
                <ul>
                    <li>Dynamic Resource Allocation</li>
                    <li>Workload Management and Throttling</li>
                    <li>Intelligent Memory Optimization</li>
                    <li>I/O Scheduling for High Throughput</li>
                </ul>
            </div>
            <div class="perf-metrics">
                <h4>📊 Performance Metrics</h4>
                <ul>
                    <li>Sub-millisecond Response Times</li>
                    <li>100,000+ Concurrent Connections</li>
                    <li>Petabyte-Scale Data Handling</li>
                    <li>99.999% Uptime Guarantee</li>
                </ul>
            </div>
        </div>`
    }
};


// Advanced Natural Language Processing
class NLPProcessor {
    constructor() {
        this.commonWords = new Set(['the', 'is', 'at', 'which', 'on', 'can', 'you', 'tell', 'me', 'about']);
        this.confidenceThreshold = 0.6;
    }

    tokenize(input) {
        return input.toLowerCase()
                   .replace(/[^\w\s]/g, '')
                   .split(/\s+/)
                   .filter(word => !this.commonWords.has(word));
    }

    calculateSimilarity(tokens, keywords) {
        const matches = tokens.filter(token => 
            keywords.some(keyword => keyword.includes(token) || token.includes(keyword))
        );
        return matches.length / Math.max(tokens.length, 1);
    }

    findBestMatch(input) {
        const tokens = this.tokenize(input);
        let bestMatch = {
            topic: null,
            confidence: 0
        };

        for (const [topic, data] of Object.entries(predefinedResponses)) {
            const confidence = this.calculateSimilarity(tokens, data.keywords);
            if (confidence > bestMatch.confidence) {
                bestMatch = { topic, confidence };
            }
        }

        return bestMatch;
    }
}

// Chat Session Management
class ChatSession {
    constructor() {
        this.history = [];
        this.nlp = new NLPProcessor();
        this.initializeEventListeners();
        this.loadingMessages = [
            "Analyzing your query...",
            "Searching knowledge base...",
            "Processing request...",
            "Fetching information..."
        ];
    }

    initializeEventListeners() {
        const sendBtn = document.getElementById("sendBtn");
        const userInput = document.getElementById("userInput");

        sendBtn.addEventListener("click", () => this.handleUserInput());
        userInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleUserInput();
            }
        });

        // Dynamic placeholder text
        this.initializePlaceholderRotation();
    }

    initializePlaceholderRotation() {
        const placeholders = [
            "Ask about IntelliDB features...",
            "Learn about security capabilities...",
            "Explore performance tools...",
            "Discover enterprise solutions...",
            "Inquire about pricing..."
        ];
        
        const userInput = document.getElementById("userInput");
        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % placeholders.length;
            userInput.placeholder = placeholders[currentIndex];
        }, 3000);
    }

    async handleUserInput() {
        const userInput = document.getElementById("userInput");
        const message = userInput.value.trim();
        
        if (!message) return;

        // Disable input during processing
        this.setInputState(false);
        
        // Add user message
        this.addMessage(message, "user-message");
        
        // Show typing indicator
        const loadingMessage = this.showLoadingIndicator();
        
        // Process response
        await this.processResponse(message);
        
        // Cleanup
        this.removeLoadingIndicator(loadingMessage);
        this.setInputState(true);
        userInput.value = "";
    }

    setInputState(enabled) {
        const userInput = document.getElementById("userInput");
        const sendBtn = document.getElementById("sendBtn");
        
        userInput.disabled = !enabled;
        sendBtn.disabled = !enabled;
        if (enabled) userInput.focus();
    }

    showLoadingIndicator() {
        const chatBox = document.getElementById("chatBox");
        const loadingDiv = document.createElement("div");
        loadingDiv.className = "typing-indicator";
        loadingDiv.textContent = this.loadingMessages[Math.floor(Math.random() * this.loadingMessages.length)];
        chatBox.appendChild(loadingDiv);
        return loadingDiv;
    }

    removeLoadingIndicator(element) {
        element.remove();
    }

    async processResponse(userInput) {
        const match = this.nlp.findBestMatch(userInput);
        
        if (match.confidence >= this.nlp.confidenceThreshold) {
            const response = predefinedResponses[match.topic].response;
            await this.simulateThinking();
            this.addMessage(response, "bot-message");
        } else {
            await this.simulateThinking();
            this.addMessage(this.generateFallbackResponse(), "bot-message");
        }
    }

    async simulateThinking() {
        return new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 800));
    }

    addMessage(content, className) {
        const chatBox = document.getElementById("chatBox");
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${className}`;
        messageDiv.innerHTML = content;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Add to history
        this.history.push({
            type: className,
            content: content,
            timestamp: new Date()
        });
    }

    generateFallbackResponse() {
        return `<div class="fallback-response">
            <h3>👋 Let me help you explore IntelliDB Enterprise!</h3>
            <p>You can ask me about:</p>
            <ul>
                <li>Enterprise Features & Capabilities</li>
                <li>Security & Compliance</li>
                <li>Performance & Optimization</li>
                <li>Tools & Utilities</li>
                <li>Pricing & Licensing</li>
            </ul>
            <p class="tip">💡 Try asking specific questions about these topics!</p>
        </div>`;
    }
}

// Initialize chat session
document.addEventListener('DOMContentLoaded', () => {
    window.chatSession = new ChatSession();
    // Send welcome message
    chatSession.addMessage(`<div class="welcome-message">
        <h3>👋 Welcome to IntelliDB Enterprise Assistant!</h3>
        <p>I'm here to help you discover our enterprise database solutions.</p>
        <p>What would you like to know about?</p>
        <div class="quick-links">
            <button onclick="chatSession.handleQuickLink('overview')">Platform Overview</button>
            <button onclick="chatSession.handleQuickLink('security')">Security Features</button>
            <button onclick="chatSession.handleQuickLink('pricing')">Pricing</button>
        </div>
    </div>`, "bot-message");
});
