Config = {}

Config.notifyType = "ios" -- or android
Config.defaultTime = 5000

--[[ 
-- export
exports["cb-notify"]:sendNotify("Message", "Type(success, warning, danger, info)", "time")

-- trigger
TriggerEvent("cb-notify:client:sendNotify", "Message", "Type(success, warning, danger, info)", "time")
TriggerClientEvent("cb-notify:client:sendNotify", source, "Message", "Type(success, warning, danger, info)", "time")

-- example export
exports["cb-notify"]:sendNotify("Test Notify", "success", 1000) 

-- example client trigger
TriggerEvent("cb-notify:client:sendNotify", "Test Notify", "success", 1000)

-- example server to client trigger
TriggerClientEvent("cb-notify:client:sendNotify", source, "Test Notify", "success", 1000)
]]
